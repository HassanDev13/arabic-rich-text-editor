export interface TermItem {
  arabic: string;
  english: string;
  description?: string;
  usageCount?: number;
}

const LOCAL_STORAGE_KEY = "arabic-rich-text-editor-term-usage";

export function incrementTermUsage(arabic: string, english: string): void {
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as Record<string, number>) : {};
    const key = `${arabic}:${english}`;
    parsed[key] = (parsed[key] ?? 0) + 1;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
  } catch (e) {
    console.error("Failed to save term usage to localStorage", e);
  }
}

export function getCustomTermsFromStorage(customTerms: TermItem[]): Required<TermItem>[] {
  const mapTerm = (term: TermItem, count: number): Required<TermItem> => ({
    arabic: term.arabic,
    english: term.english,
    description: term.description ?? "",
    usageCount: count,
  });

  if (typeof window === "undefined") {
    return customTerms.map((t) => mapTerm(t, t.usageCount ?? 0));
  }
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Record<string, number>;
      return customTerms.map((term) => {
        const key = `${term.arabic}:${term.english}`;
        return mapTerm(term, parsed[key] ?? term.usageCount ?? 0);
      });
    }
  } catch (e) {
    console.error("Failed to read custom term usage from localStorage", e);
  }
  return customTerms.map((t) => mapTerm(t, t.usageCount ?? 0));
}

export function checkOutdatedTerms(editor: any, currentTerms: TermItem[]): number {
  if (!editor || !currentTerms || currentTerms.length === 0) return 0;
  let count = 0;
  const termsMap = new Map(currentTerms.map((t) => [t.english.toLowerCase(), t]));

  editor.state.doc.descendants((node: any) => {
    const termMark = node.marks.find((mark: any) => mark.type.name === "term");
    if (termMark) {
      const { arabic, english } = termMark.attrs;
      if (english) {
        const currentTerm = termsMap.get(english.toLowerCase());
        if (currentTerm && currentTerm.arabic !== arabic) {
          count++;
        }
      }
    }
    return true;
  });
  return count;
}

export function updateOutdatedTerms(editor: any, currentTerms: TermItem[]): number {
  if (!editor || !currentTerms || currentTerms.length === 0) return 0;

  const { state, view } = editor;
  const { doc } = state;
  const tr = state.tr;

  const termsMap = new Map(currentTerms.map((t) => [t.english.toLowerCase(), t]));
  const updates: { from: number; to: number; newText: string; term: TermItem }[] = [];

  doc.descendants((node: any, pos: number) => {
    const termMark = node.marks.find((mark: any) => mark.type.name === "term");
    if (termMark) {
      const { arabic, english } = termMark.attrs;
      if (english) {
        const currentTerm = termsMap.get(english.toLowerCase());
        if (currentTerm && currentTerm.arabic !== arabic) {
          const from = pos;
          const to = pos + node.nodeSize;
          const newText = `${currentTerm.arabic} (${currentTerm.english})`;
          updates.push({ from, to, newText, term: currentTerm });
        }
      }
    }
    return true;
  });

  // Apply updates in reverse order of position to prevent index shifts
  updates.sort((a, b) => b.from - a.from);

  updates.forEach((update) => {
    tr.insertText(update.newText, update.from, update.to);
    const newTo = update.from + update.newText.length;
    tr.removeMark(update.from, newTo, state.schema.marks.term);

    const newMark = state.schema.marks.term.create({
      arabic: update.term.arabic,
      english: update.term.english,
      description: update.term.description || "",
    });
    tr.addMark(update.from, newTo, newMark);
  });

  if (updates.length > 0) {
    view.dispatch(tr);
  }

  return updates.length;
}
