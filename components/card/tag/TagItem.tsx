// components/card/tag/TagItem.tsx
import { COLOR_TABLE } from "@/const/const";
import { ParsedDatabaseItemsType } from "@/utils/parseDatabaseItems";
import Link from "next/link";
import React from "react";

interface TagItemProps {
  tagData: ParsedDatabaseItemsType["tags"][number];
}

const TagItem = ({ tagData }: TagItemProps) => {
  const { color, name } = tagData;

  return (
    <li>
      <Link href={`/tags/${name.toLowerCase()}`} legacyBehavior>
        <a
          className="text-sm font-light block hover:-translate-y-1 px-2 py-1 rounded-2xl hover:shadow-md transition-all hover:underline text-gray-800"
          style={{
            backgroundColor: COLOR_TABLE[color],
          }}
        >
          #{name}
        </a>
      </Link>
    </li>
  );
};

export default TagItem;