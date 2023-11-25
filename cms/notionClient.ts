import { Client } from "@notionhq/client";
import { NotionAPI } from 'notion-client'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

interface DatabaseQueryOption {
  filter?: {
    tagName?: string;
  };
}

// cms/notionClient.ts
export const getDatabaseFromNotion = async (
  databaseId: string,
  option?: DatabaseQueryOption
  ) => {
  console.log(option?.filter?.tagName)
  
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "공개",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Tags",
          multi_select: {
            contains: option?.filter?.tagName ?? "",
          },
        },
      ],
    },
    sorts: [
      {
        property: "Published",
        direction: "descending",
      },
    ],
  });

  return response.results;
};

export const unofficialNotionApi = new NotionAPI();

export const getPageContent = async (pageId: string) => {
  const recordMap = await unofficialNotionApi.getPage(pageId);

  return recordMap;
};