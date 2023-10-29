import Title from "@/components/ui/title";
import { FC } from "react";
import "./styles.scss";
import OrderIcon from "@/components/ui/icons/order";
import FilterIcon from "@/components/ui/icons/filter";
import Link from "next/link";
import CardToolDocument from "@/components/elements/card-tool-document";

export type ToolDocument = {
  id: number;
  title: string;
  slug: string;
  description: string;
  coach?: any;
};

interface ICardsToolDocumentsProps {
  documents: ToolDocument[];
}

const CardsToolDocuments: FC<ICardsToolDocumentsProps> = ({ documents }) => {
  return (
    <div className="cards-tool-documents">
      <div className="documents-header">
        <Title component="h2">Documentos</Title>
        <div className="documents-header__options">
          <div>
            <OrderIcon />
          </div>
          <div>
            <FilterIcon />
          </div>
        </div>
      </div>
      <div className="cards-tool-documents__list">
        {documents.map((item) => (
          <CardToolDocument key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardsToolDocuments;
