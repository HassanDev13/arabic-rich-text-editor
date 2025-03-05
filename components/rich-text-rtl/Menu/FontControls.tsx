import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const arabicFonts = [
  "Noto Naskh Arabic",
  "Amiri",
  "Cairo",
  "Scheherazade New",
  "Tajawal",
  "Almarai",
  "Dubai",
  "Lalezar",
];

interface FontControlsProps {
  fontSettings: { fontFamily: string; fontSize: string; lineHeight: string };
  onFontChange: (type: "fontFamily" | "fontSize" | "lineHeight", value: string) => void;
  className?: string;
}

export const FontControls: React.FC<FontControlsProps> = ({ fontSettings, onFontChange, className }) => (
  <div className={cn("flex items-center gap-2 flex-wrap", className)}>
    <Select value={fontSettings.fontFamily} onValueChange={(value) => onFontChange("fontFamily", value)}>
      <SelectTrigger className="w-[140px] md:w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {arabicFonts.map((font) => (
          <SelectItem key={font} value={font}>{font}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select value={fontSettings.fontSize} onValueChange={(value) => onFontChange("fontSize", value)}>
      <SelectTrigger className="w-[80px] md:w-[100px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {["12px", "14px", "16px", "18px", "20px", "24px", "30px"].map((size) => (
          <SelectItem key={size} value={size}>{size.replace("px", "")}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select value={fontSettings.lineHeight} onValueChange={(value) => onFontChange("lineHeight", value)}>
      <SelectTrigger className="w-[80px] md:w-[100px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {["1", "1.15", "1.5", "2", "2.5"].map((height) => (
          <SelectItem key={height} value={height}>{height}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

 