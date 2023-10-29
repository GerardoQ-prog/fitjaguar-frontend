import Title from "@/components/ui/title";
import React from "react";
import "./styles.scss";

const DetailCourse = ({ courseDetail }: any) => {
  return (
    <div className="detail-course">
      <p>Detalle del curso</p>
      <br />
      <div className="course-header">
        <div className="course-title">
          <Title component="h1">{courseDetail.title}</Title>
          <p className="course-title__blocks">
            {courseDetail.blocks.length}
            {`${courseDetail.blocks.length > 1 ? " bloques" : " bloque"}`} de
            trabajo
          </p>
          <div className="course-tags">
            <div>{courseDetail.duration}</div>
            <div>{courseDetail.duration}</div>
            <div>{courseDetail.students}</div>
          </div>
        </div>
        <div>
          <div>
            <p>Ruta</p>
            <p>{courseDetail.road}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCourse;
