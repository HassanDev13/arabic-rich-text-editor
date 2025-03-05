import { FontControls } from "./FontControls";

interface MobileMenuProps {
  fontSettings: { fontFamily: string; fontSize: string; lineHeight: string };
  onFontChange: (type: "fontFamily" | "fontSize" | "lineHeight", value: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ fontSettings, onFontChange }) => (
  <div className="p-2 md:hidden flex flex-col gap-2">
    <FontControls fontSettings={fontSettings} onFontChange={onFontChange} />
  </div>
);