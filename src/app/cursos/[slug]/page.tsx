"use client";

import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import { useParams } from "next/navigation";
import React from "react";
import courses from "@/utils/data/courses.json";
import DetailCourse from "@/components/containers/detail-curse";
import BackButton from "@/components/ui/back-button";

const DetailCoursePage = () => {
  const params = useParams();
  const courseDetail: any = courses.find(
    (item: any) => item.slug === params.slug
  );

  return (
    <main>
      <Separator height="150px" />
      <WrapperContent>
        <BackButton href={`/cursos`} />
        <DetailCourse courseDetail={courseDetail} />
      </WrapperContent>
    </main>
  );
};

export default DetailCoursePage;
