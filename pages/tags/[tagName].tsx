import { getDatabaseFromNotion } from '@/cms/notionClient';
import CardSection from '@/components/intro/CardSection';
import { getAllTags } from '@/utils/getAllTags';
import { parseDatabaseItems, ParsedDatabaseItemsType } from '@/utils/parseDatabaseItems';
import {GetStaticPaths} from 'next'
import TagContainer from './TagContainer';
import TagHeroSection from './TagHeroSection';
import { MultiSelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// pages/tags/[tagName].tsx
export const getStaticPaths: GetStaticPaths = async () => {
  if (!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined.");

  const databaseItems = await getDatabaseFromNotion(process.env.DATABASE_ID);

  const allTags = getAllTags(databaseItems);

  const paths = allTags.map(({ name: tagName }) => ({
    params: {
      tagName,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// pages/tags/[tagName].tsx
interface TagNamePageProps {
  databaseItems: ParsedDatabaseItemsType[];
  tagName: string;
  allTags: MultiSelectPropertyItemObjectResponse["multi_select"];
}

const TagNamePage = ({ databaseItems, tagName, allTags }: TagNamePageProps) => {
  return (
    <div>
      <TagHeroSection title={`#${tagName}`} />
      <TagContainer tags={allTags} />
      <CardSection cardItems={databaseItems} />
    </div>
  );
};


export default TagNamePage;

interface TagNamePageParams extends ParsedUrlQuery {
  tagName: string;
}

export const getStaticProps: GetStaticProps<
  TagNamePageProps,
  TagNamePageParams
> = async ({ params }) => {
  if (!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined.");

  const { tagName } = params!;

  // 필터 대소문자 가린다고 해놓고 왜 pascal로 만들어서 필터링하는지 모르겠음 (그래서 버림)
  const pascalTagName = tagName[0].toUpperCase() + tagName.slice(1);

  const databaseItems = await getDatabaseFromNotion(process.env.DATABASE_ID, {
    filter: { tagName: tagName },
  });
  const databaseItemsAll = await getDatabaseFromNotion(process.env.DATABASE_ID);

  const allTags = getAllTags(databaseItemsAll);

  const parsedDatabaseItems = parseDatabaseItems(databaseItems);

  return {
    props: {
      databaseItems: parsedDatabaseItems,
      // 화면 상으로 보여줄 때만 파스칼 씀
      tagName: pascalTagName,
      allTags: allTags,
    },
    revalidate: 300,
  };
};