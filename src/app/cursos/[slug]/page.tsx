"use client";

import CardsCoursesType from "@/components/containers/cards-courses-type";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import React from "react";
import courses from "@/utils/data/courses.json";
import { useParams } from "next/navigation";

const CoursesTypePage = () => {
  const params = useParams();

  const course: any = courses.courses.find((item) => item.slug === params.slug);

  return (
    <main>
      <Separator height="120px" />
      <WrapperContent>
        <CardsCoursesType course={course} />
      </WrapperContent>
    </main>
  );
};

export default CoursesTypePage;
