// components/card/CardList.tsx
import { ParsedDatabaseItemsType } from "@/utils/parseDatabaseItems";
import React from "react";
import CardItem from "./CardItem";

interface CardListProps {
  cardItems: ParsedDatabaseItemsType[];
}

const CardList = ({ cardItems }: CardListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cardItems.map((cardItem) => (
        <CardItem key={cardItem.id} cardData={cardItem} />
      ))}
    </ul>
  );
};

export default CardList;