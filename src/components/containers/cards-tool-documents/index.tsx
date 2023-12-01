"use client";

import { FC, useState } from "react";
import "./styles.scss";
import CardToolDocument from "@/components/elements/card-tool-document";
import TabsVertical from "@/components/ui/tabs-vertical";
import Select from "@/components/ui/select";

export type ToolDocument = {
  id: number;
  title: string;
  slug: string;
  description: string;
  coach?: any;
  road: string;
  image: string;
  likes: string;
  comments: any[];
  pdf: string;
};

interface ICardsToolDocumentsProps {
  documents: ToolDocument[];
  roads: any[];
}

const CardsToolDocuments: FC<ICardsToolDocumentsProps> = ({
  documents,
  roads,
}) => {
  const allRoads = [{ id: 0, name: "Todas las rutas" }, ...roads];
  const [tabSelected, setTabSelected] = useState(allRoads[0]);

  const handleTabSelected = (tab: any) => {
    setTabSelected(tab);
  };

  const orderOptions = [
    {
      id: 1,
      name: "Más recientes",
    },
    {
      id: 2,
      name: "Más populares",
    },
  ];

  const [orderOptionSelected, setOrderOptionSelected] = useState(
    orderOptions[0]
  );

  const handleChangeSelected = (option: any) => {
    setOrderOptionSelected(option);
  };

  return (
    <div className="cards-tool-documents">
      <TabsVertical
        tabs={allRoads}
        tabSelected={tabSelected}
        onTabSelected={handleTabSelected}
      />
      <div className="cards-tool-documents__container">
        <div className="cards-tool-documents__filters">
          <div>
            <p>Ordenar por</p>
            <Select
              options={orderOptions}
              selected={orderOptionSelected}
              handleChangeSelect={handleChangeSelected}
            />
          </div>
        </div>
        <div className="cards-tool-documents__list">
          {documents.map((item) => (
            <CardToolDocument key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsToolDocuments;
