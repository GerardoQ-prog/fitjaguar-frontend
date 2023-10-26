import CardCourse from "@/components/elements/card-course";
import React, { FC } from "react";
import "./styles.scss";
import Title from "@/components/ui/title";

interface ICardsCoursesProps {
  isViewAll: boolean;
}

const CardsCourses: FC<ICardsCoursesProps> = ({ isViewAll }) => {
  return (
    <div className="cards-courses">
      <div className="cards-courses__head">
        <Title>Cursos de Crossfit</Title>
        {isViewAll && <span>Ver todo</span>}
      </div>
      <div className="cards-courses__list">
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </div>
    </div>
  );
};

export default CardsCourses;
