// components/card/CardItem.tsx
import { ParsedDatabaseItemsType } from "@/utils/parseDatabaseItems";
import Image from "next/image";
import Link from "next/link";
import IconRenderer from "./IconRenderer";
import TagList from "./tag/TagList";

interface CardItemProps {
  cardData: ParsedDatabaseItemsType;
}

const CardItem = ({ cardData }: CardItemProps) => {
  const { cover, description, icon, published, tags, title, id } = cardData;

  return (
    <li className="rounded-2xl overflow-hidden shadow-lg group flex flex-col">
      <Link href={`/blog/${id}`} legacyBehavior>
        <a className="flex-grow">
          <div className="relative w-full h-auto aspect-[1.3/1]">
            <Image
              src={cover}
              alt={title}
              layout="fill"
							objectFit="cover"
              className="group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="p-4 flex flex-col gap-4">
            <h3 className="font-bold text-2xl group-hover:text-blue-500 transition-colors flex flex-row items-center gap-1">
              <IconRenderer icon={icon} alt={title} />
              {title}
            </h3>
            {description ? (
              <p className="text-gray-600 font-medium">{description}</p>
            ) : null}
            <time className="text-gray-600 font-light text-sm">
              {published}
            </time>
          </div>
        </a>
      </Link>
      <TagList tagItems={tags} />
    </li>
  );
};

export default CardItem;