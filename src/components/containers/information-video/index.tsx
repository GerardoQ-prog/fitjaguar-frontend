"use client";

import { FC } from "react";
import { ToolVideo } from "../cards-tool-videos";
import CardCoach from "@/components/elements/card-coach";
import Subtitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";
import "./styles.scss";
import Button from "@/components/ui/button";
import Plyr from "plyr-react";

interface IInformationVideoProps {
  video: ToolVideo;
}

const InformationVideo: FC<IInformationVideoProps> = ({ video }) => {
  return (
    <div className="information-video">
      <Subtitle>Recurso gratuito</Subtitle>
      <div className="information-video__head">
        <Title component="h1">{video.title}</Title>
        <div>
          <span>Ruta</span>
          <p>{video.road}</p>
        </div>
      </div>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: video.video,
              provider: "vimeo",
            },
          ],
        }}
      />
      <div className="information-video__course">
        <p>
          Deseas seguir aprendiendo, continúa tu aprendizaje en el siguiente
          curso
        </p>
        <Button type="secondary">Ver curso</Button>
      </div>
      <Subtitle className="information-video__subtitle">Descripcion</Subtitle>
      <div
        dangerouslySetInnerHTML={{ __html: video.description }}
        className="information-video__description"
      ></div>
      <Subtitle className="information-video__subtitle">Opiniones</Subtitle>
      <Subtitle className="information-video__subtitle">Comentarios</Subtitle>
      <div></div>
      <CardCoach coach={video.coach} />
    </div>
  );
};

export default InformationVideo;
