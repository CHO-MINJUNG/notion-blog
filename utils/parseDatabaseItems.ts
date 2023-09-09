import { getDatabaseFromNotion } from "@/cms/notionClient";
import {
  MultiSelectPropertyItemObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export interface ParsedDatabaseItemsType {
  id: string;
  cover: string;
  icon: PageObjectResponse["icon"];
  description: string;
  title: string;
  published: string;
  tags: MultiSelectPropertyItemObjectResponse["multi_select"];
}

export const parseDatabaseItems = (
  items: Awaited<ReturnType<typeof getDatabaseFromNotion>>
) => {
  const parsedItems = items.reduce<ParsedDatabaseItemsType[]>((acc, item) => {
    
    if (!("properties" in item)) return acc;

    const { id, icon } = item;
    const { Description, Published, 이름, Tags } = item.properties; // 임의로 설정한 프로퍼티들입니다

    const cover =
      (item.cover?.type === "external"
        ? item.cover.external.url
        : item.cover?.file.url) ?? "";

    const description =
      (Description.type === "rich_text"
        ? Description.rich_text[0]?.plain_text
        : "") ?? "";

    const published =
      (Published.type === "date" ? Published.date?.start : "") ?? "";

    const title = 이름.type === "title" ? 이름.title[0].plain_text : "";

    const tags = Tags.type === "multi_select" ? Tags.multi_select : [];

    const parsedItem: ParsedDatabaseItemsType = {
      id,
      cover,
      icon,
      description,
      published,
      title,
      tags,
    };

    return [...acc, parsedItem];
  }, []);

  return parsedItems;
};