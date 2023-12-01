"use client";

import CardCourse from "@/components/elements/card-course";
import { FC, useState } from "react";
import "./styles.scss";
import TabsVertical from "@/components/ui/tabs-vertical";
import Select from "@/components/ui/select";

export type ItemCourse = {
  id: string | number;
  title: string;
  duration: string;
  road: any;
  priceCurrent: number;
  price: number;
  description: string;
  miniature: string;
  blocks: any[];
  coach: any;
  students: string;
  likes: string;
  comments: any[];
  level: string;
  slug: string;
};

interface ICardsCoursesProps {
  courses: ItemCourse[];
  roads: any[];
}

const CardsCourses: FC<ICardsCoursesProps> = ({ courses, roads }) => {
  const allRoads = [{ id: 0, name: "Todas las rutas" }, ...roads];
  const orderOptions = [
    {
      id: 1,
      name: "Más recientes",
    },
    {
      id: 2,
      name: "Más populares",
    },
    {
      id: 3,
      name: "Precio: Mayor a menor",
    },
    {
      id: 4,
      name: "Precio: Menor a mayor",
    },
  ];

  const [tabSelected, setTabSelected] = useState(allRoads[0]);
  const [orderOptionSelected, setOrderOptionSelected] = useState(
    orderOptions[0]
  );

  const handleTabSelected = (tab: any) => {
    setTabSelected(tab);
  };

  const handleChangeSelected = (option: any) => {
    setOrderOptionSelected(option);
  };

  return (
    <div className="cards-courses">
      <TabsVertical
        tabs={allRoads}
        tabSelected={tabSelected}
        onTabSelected={handleTabSelected}
      />
      <div className="cards-courses__container">
        <div className="cards-courses__filters">
          <div>
            <p>Ordenar por</p>
            <Select
              options={orderOptions}
              selected={orderOptionSelected}
              handleChangeSelect={handleChangeSelected}
            />
          </div>
        </div>
        <div className="cards-courses__list">
          {courses.map((item, index) => (
            <CardCourse key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsCourses;
