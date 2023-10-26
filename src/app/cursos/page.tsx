import CardsCourses from "@/components/containers/cards-courses";
import Separator from "@/components/ui/separator";
import React from "react";

const CoursesPage = () => {
  return (
    <div>
      <Separator height="120px" />
      <CardsCourses isViewAll={false} />
    </div>
  );
};

export default CoursesPage;
