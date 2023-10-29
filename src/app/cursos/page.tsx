import CardsCourses from "@/components/containers/cards-courses";
import Separator from "@/components/ui/separator";
import React from "react";
import courses from "@/utils/data/courses.json";
import Title from "@/components/ui/title";
import WrapperContent from "@/components/containers/wrapper-content";

const CoursesPage = () => {
  return (
    <main>
      <Separator height="120px" />
      <WrapperContent>
        <Title>Cursos</Title>
        {courses.courses.map((courses, index) => (
          <CardsCourses courses={courses} key={index} />
        ))}
      </WrapperContent>
    </main>
  );
};

export default CoursesPage;
