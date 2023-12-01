import Title from "@/components/ui/title";
import React from "react";
import "./styles.scss";
import MiniPlayIcon from "@/components/ui/icons/mini-play";
import CaloriesIcon from "@/components/ui/icons/calories";
import Button from "@/components/ui/button";
import StudentsIcon from "@/components/ui/icons/students";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";
import CardCoach from "@/components/elements/card-coach";
import Plyr from "plyr-react";
import LikeIcon from "@/components/ui/icons/like";
import CommentIcon from "@/components/ui/icons/comment";

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
            <div>
              <MiniPlayIcon /> {courseDetail.duration}
            </div>
            <div>
              <CaloriesIcon /> {courseDetail.calories} Cal - aprox
            </div>
            <div>
              <StudentsIcon /> {courseDetail.students} estudiantes
            </div>
          </div>
        </div>
        <div>
          <div className="course-header__road">
            <span>Ruta</span>
            <p>{courseDetail.road.name}</p>
          </div>
          <Button>Comprar curso</Button>
        </div>
      </div>
      <br />
      <div className="course-information">
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: courseDetail.blocks[0].video,
                provider: "vimeo",
              },
            ],
          }}
          style={{ width: "100%" }}
        />
        <Subtitle className="course-information__title">
          Descripción del curso
        </Subtitle>
        <div
          dangerouslySetInnerHTML={{ __html: courseDetail.description }}
        ></div>
        <Subtitle className="course-information__title">Opiniones</Subtitle>
        <div className="course-information__opinions">
          <div>
            <LikeIcon /> {courseDetail.likes}
          </div>
          <div>
            <CommentIcon /> {courseDetail.comments.length}
          </div>
        </div>
        <Subtitle className="course-information__title">Comentarios</Subtitle>
        <div>
          {courseDetail.comments.map((comment: any) => (
            <div key={comment.id} className="course-comment">
              <div className="course-comment__user">
                <Image
                  alt={comment.user}
                  src={comment.photo}
                  width={27}
                  height={27}
                  className="course-comment__photo"
                />
                <p>{comment.user}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
        <br />
        <CardCoach coach={courseDetail.coach} />
      </div>
    </div>
  );
};

export default DetailCourse;
