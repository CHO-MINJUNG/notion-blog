// pages/blog/[pageId].tsx
import { GetStaticProps } from "next";
import { GetStaticPaths } from 'next';
import React from "react";
import { ParsedUrlQuery } from "querystring";
import { getPageContent } from "@/cms/notionClient";
import { ExtendedRecordMap } from "notion-types";
import { getDatabaseFromNotion } from "@/cms/notionClient";
import NotionPageRenderer from "@/components/notion/NotionPageRenderer";

interface BlogPageProps {
  recordMap: ExtendedRecordMap;
}

const BlogPage = ({ recordMap }: BlogPageProps) => {
  return <NotionPageRenderer recordMap={recordMap} />;
};

export default BlogPage;

interface BlogPageParams extends ParsedUrlQuery {
  pageId: string;
}

export const getStaticProps: GetStaticProps<
  BlogPageProps,
  BlogPageParams
> = async ({ params }) => {
  const { pageId } = params!;

  const recordMap = await getPageContent(pageId);

  return {
    props: {
      recordMap,
    },
  };
};

export const getStaticPaths:GetStaticPaths = async () => {
  if (!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined.");

  const databaseItems = await getDatabaseFromNotion(process.env.DATABASE_ID);

  const paths = databaseItems.map(({ id: pageId }) => ({
    params: {
      pageId,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};