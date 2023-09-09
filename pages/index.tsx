import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getDatabaseFromNotion } from '@/cms/notionClient';
import { parseDatabaseItems } from '@/utils/parseDatabaseItems';
import HeroSection from '@/components/intro/HeroSection';


export const getStaticProps: GetStaticProps = async () => {
  if (!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined.");

  const databaseItems = await getDatabaseFromNotion(process.env.DATABASE_ID);
  const parsedDatabaseItems = parseDatabaseItems(databaseItems);
  return {
    props: {
      databaseItems: parsedDatabaseItems,
    },
  };
};

const inter = Inter({ subsets: ['latin'] })

const Home = ({ databaseItems }: HomeProps) => {
  console.log(databaseItems);

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Home;