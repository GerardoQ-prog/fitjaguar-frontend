"use client";

import CardToolVideo from "@/components/elements/card-tool-video";
import Title from "@/components/ui/title";
import { FC, useState } from "react";
import "./styles.scss";
import OrderIcon from "@/components/ui/icons/order";
import FilterIcon from "@/components/ui/icons/filter";
import Select from "@/components/ui/select";
import TabsVertical from "@/components/ui/tabs-vertical";

export type ToolVideo = {
  id: number;
  title: string;
  duration: string;
  slug: string;
  description: string;
  road: string;
  coach?: any;
  video: string;
  miniature: string;
  likes: string;
  comments: any[];
};

interface ICardToolVideoProps {
  videos: ToolVideo[];
  roads: any[];
}

const CardsToolsVideos: FC<ICardToolVideoProps> = ({ videos, roads }) => {
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
    <div className="cards-tool-videos">
      <TabsVertical
        tabs={allRoads}
        tabSelected={tabSelected}
        onTabSelected={handleTabSelected}
      />
      <div className="cards-tool-video__container">
        <div className="cards-tool-videos__filters">
          <div>
            <p>Ordenar por</p>
            <Select
              options={orderOptions}
              selected={orderOptionSelected}
              handleChangeSelect={handleChangeSelected}
            />
          </div>
        </div>
        <div className="cards-tool-videos__list">
          {videos.map((item) => (
            <CardToolVideo key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsToolsVideos;
