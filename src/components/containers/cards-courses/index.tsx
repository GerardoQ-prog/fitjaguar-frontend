import CardCourse from "@/components/elements/card-course";
import { FC } from "react";
import "./styles.scss";
import Title from "@/components/ui/title";
import Link from "next/link";

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

interface ICardsCoursesProps {
  courses: CoursesContent;
}

const CardsCourses: FC<ICardsCoursesProps> = ({ courses }) => {
  return (
    <div className="cards-courses">
      <div className="cards-courses__head">
        <Title component="h2">{courses.title}</Title>
        <Link href={`/cursos/${courses.slug}`}>
          <span>Ver todos</span>
        </Link>
      </div>
      <div className="cards-courses__list">
        {courses.items.map((item, index) => (
          <CardCourse key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardsCourses;
