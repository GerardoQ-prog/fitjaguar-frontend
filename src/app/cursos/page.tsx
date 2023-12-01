import CardsCourses from "@/components/containers/cards-courses";
import Separator from "@/components/ui/separator";
import React from "react";
import Title from "@/components/ui/title";
import WrapperContent from "@/components/containers/wrapper-content";
import { Metadata } from "next";
import courses from "@/utils/data/courses.json";
import roads from "@/utils/data/road.json";

export const metadata: Metadata = {
  title: "Cursos FitJaguarGo",
  description: "Generated by create next app",
};
const CoursesPage = () => {
  return (
    <main>
      <Separator height="120px" />
      <WrapperContent>
        <Title>Cursos</Title>
        <CardsCourses courses={courses} roads={roads} />
      </WrapperContent>
    </main>
  );
};

export default CoursesPage;
