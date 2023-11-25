// components/card/IconRenderer.tsx
import { ParsedDatabaseItemsType } from "@/utils/parseDatabaseItems";
import Image from "next/image";

interface IconRendererProps {
  icon: ParsedDatabaseItemsType["icon"];
	alt: string;
}

const IconRenderer = ({ icon }: IconRendererProps) => {
  if (!icon) return null;

  if (icon.type === "emoji") return <span>{icon.emoji}</span>;

  const src = icon.type === "external" ? icon.external.url : icon.file.url;

  return (
    <Image
      src={src}
			alt={`${alt} icon`}      
			width={28}
      height={28}
      className="rounded-full"
    />
  );
};

export default IconRenderer;