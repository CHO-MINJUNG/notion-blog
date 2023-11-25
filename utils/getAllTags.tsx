// utils/getAllTags.ts
import { getDatabaseFromNotion } from "@/cms/notionClient";
import { MultiSelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const getAllTags = (
  databaseItems: Awaited<ReturnType<typeof getDatabaseFromNotion>>
) => {
  const tags = databaseItems.reduce<
    MultiSelectPropertyItemObjectResponse["multi_select"]
  >((acc, item) => {
    if (!("properties" in item)) return acc;

    const { Tags } = item.properties;

    const tags = Tags.type === "multi_select" ? Tags.multi_select : [];

    tags.forEach((tag) => {
      const isAlreadyExist =
        acc.findIndex((accTag) => accTag.id === tag.id) > -1;
      !isAlreadyExist && acc.push(tag);
    });

    return acc;
  }, []);

  return tags;
};