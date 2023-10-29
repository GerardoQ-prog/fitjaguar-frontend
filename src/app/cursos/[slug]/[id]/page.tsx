"use client";

import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import { useParams } from "next/navigation";
import React from "react";
import courses from "@/utils/data/courses.json";
import { it } from "node:test";
import DetailCourse from "@/components/containers/detail-curse";

const DetailCoursePage = () => {
  const params = useParams();
  const course: any = courses.courses.find((item) => item.slug === params.slug);
  const courseDetail: any = course.items.find(
    (item: any) => item.slug === params.id
  );

  return (
    <main>
      <Separator height="150px" />
      <WrapperContent>
        <DetailCourse courseDetail={courseDetail} />
      </WrapperContent>
    </main>
  );
};

export default DetailCoursePage;
