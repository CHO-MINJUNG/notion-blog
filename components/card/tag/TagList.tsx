// components/card/tag/TagList.tsx
import { ParsedDatabaseItemsType } from "@/utils/parseDatabaseItems";
import React from "react";
import TagItem from "./TagItem";

interface TagListProps {
  tagItems: ParsedDatabaseItemsType["tags"];
}

const TagList = ({ tagItems }: TagListProps) => {
  return (
    <ul className="p-4 flex flex-row flex-wrap gap-2">
      {tagItems.map((tagItem) => (
        <TagItem key={tagItem.id} tagData={tagItem} />
      ))}
    </ul>
  );
};

export default TagList;