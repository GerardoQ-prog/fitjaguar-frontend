import CardCourse from "@/components/elements/card-course";
import { FC } from "react";
import "./styles.scss";
import Title from "@/components/ui/title";
import OrderIcon from "@/components/ui/icons/order";
import FilterIcon from "@/components/ui/icons/filter";

export type ItemCourse = {
  id: string;
  title: string;
  teacher: string;
  duration: string;
  road: string;
  type: string;
  priceCurrent: string;
  price: string;
  description: string;
  miniature: string;
  blocks: any[];
  students: string;
  comments: string;
  level: string;
  slug: string;
};

type CoursesContent = {
  title: string;
  slug: string;
  items: ItemCourse[];
};

interface ICardsCoursesTypeProps {
  course: CoursesContent;
}

const CardsCoursesType: FC<ICardsCoursesTypeProps> = ({ course }) => {
  return (
    <div className="cards-courses-type">
      <div className="cards-courses-type__head">
        <Title component="h2">{course.title}</Title>
        <div className="cards-courses-type__options">
          <div>
            <OrderIcon />
          </div>
          <div>
            <FilterIcon />
          </div>
        </div>
      </div>
      <div className="cards-courses-type__list">
        {course.items.map((item, index) => (
          <CardCourse key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardsCoursesType;
