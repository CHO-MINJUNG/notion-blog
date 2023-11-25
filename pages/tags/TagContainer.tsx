// components/tags/TagContainer.tsx
import { MultiSelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import TagList from "@/components/card/tag/TagList";

interface TagContainerProps {
  tags: MultiSelectPropertyItemObjectResponse["multi_select"];
}

const TagContainer = ({ tags }: TagContainerProps) => {
  return (
    <section>
      <div className="w-4/5 max-w-5xl mx-auto bg-gray-100 rounded-xl my-8">
        <TagList tagItems={tags} />
      </div>
    </section>
  );
};

export default TagContainer;