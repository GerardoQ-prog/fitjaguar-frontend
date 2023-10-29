"use client";

import React, { FC } from "react";
import Plyr, { APITypes } from "plyr-react";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import "./styles.scss";
import Button from "@/components/ui/button";
import Link from "next/link";

type ExperienceContent = {
  title: string;
  subtitle: string;
  video: string;
};
interface IExperienceProps {
  experience: ExperienceContent;
}

const Experience: FC<IExperienceProps> = ({ experience }) => {
  return (
    <div className="experience">
      <div className="experience-content">
        <Title className="experience-content__title">{experience.title}</Title>
        <Subtitle className="experience-content__subtitle">
          {experience.subtitle}
        </Subtitle>
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: experience.video,
                provider: "vimeo",
              },
            ],
          }}
          style={{ width: "100%" }}
        />

        <div className="experience-content__actions">
          <Link href="/cursos">
            <Button>Ver cursos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
