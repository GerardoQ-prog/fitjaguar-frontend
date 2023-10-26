import CardCourse from "@/components/elements/card-course";
import Button from "@/components/ui/button";
import Subtitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";
import React from "react";
import "./styles.scss";

const BannerRoad = () => {
  return (
    <div className="banner-road">
      <div className="road">
        <div className="road__information">
          <div>
            <Title className="road__title">Ruta de cursos</Title>
            <Subtitle className="road__subtitle">
              Título completo para la ruta{" "}
            </Subtitle>
            <span>
              Descripción de cursos que comprenden la ruta de aprendizaje
            </span>
          </div>
          <Button type="secondary" className="road__button">
            Ver todo
          </Button>
        </div>
        <div className="road__list-courses">
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </div>
      </div>
    </div>
  );
};

export default BannerRoad;
