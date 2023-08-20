import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getDatabaseFromNotion } from '@/cms/notionClient';


export const getStaticProps: GetStaticProps = async () => {
  if (!process.env.DATABASE_ID) throw new Error("DATABASE_ID is not defined.");

  const databaseItems = await getDatabaseFromNotion(process.env.DATABASE_ID);
  
  return {
    props: {
      databaseItems,
    },
  };
};

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    </main>
  )
}
