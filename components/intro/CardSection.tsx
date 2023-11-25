// components/intro/CardSection.tsx
import { ParsedDatabaseItemsType } from "@/utils/parseDatabaseItems";
import CardList from "../card/CardList";

interface CardSectionProps {
  cardItems: ParsedDatabaseItemsType[];
}

const CardSection = ({ cardItems }: CardSectionProps) => {
  return (
    <section>
      <div className="max-w-5xl w-4/5 mx-auto py-8 flex flex-col gap-6">
        <h2 className="text-3xl font-bold">Posts</h2>
        <CardList cardItems={cardItems} />
				{/* 페이지네이션 들어갈 자리 */}
      </div>
    </section>
  );
};

export default CardSection;