"use client";

import React from "react";
import Plyr, { APITypes } from "plyr-react";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import "./styles.scss";
import Button from "@/components/ui/button";

const Experience = () => {
  const videoId = "876706732";
  const provider = "vimeo";

  return (
    <div className="experience">
      <div className="experience-content">
        <Title className="experience-content__title">
          Vive la experiencia Fitjaguar
        </Title>
        <Subtitle className="experience-content__subtitle">
          Con FitJaguar accede a miles de posibilidades para mejorar tu ruta de
          aprendizaje
        </Subtitle>
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: videoId,
                provider: provider,
              },
            ],
          }}
          style={{ width: "100%" }}
        />

        <div className="experience-content__actions">
          <Button>Ver cursos</Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
