import BannerBackground from "@/components/containers/banner-background";
import React from "react";
import "./styles.scss";
import Button from "@/components/ui/button";
import Link from "next/link";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
const BannerStatistics = () => {
  return (
    <BannerBackground
      image="/images/png/background-yellow.png"
      alt="Banner Yellow"
      height="500px"
      className="banner-statistics"
    >
      <Title className="banner-statistics__title">¿Por qué FitJaguar?</Title>
      <Subtitle className="banner-statistics__subtitle">
        Transformamos la industria del fitness conectando a entrenadores,
        atletas y principiantes para ayudarlos a comenzar desde cero o salir del
        estancamiento.
      </Subtitle>
      <div className="statistics">
        <div>
          <p className="statistics__number">+1 000</p>
          <p className="statistics__description">Horas de contenido</p>
        </div>
        <div>
          <p className="statistics__number">+140</p>
          <p className="statistics__description">
            Gimnasios que trabajan con nosotros
          </p>
        </div>
        <div>
          <p className="statistics__number">+10</p>
          <p className="statistics__description">
            Países de cobertura con asociados
          </p>
        </div>
        <div>
          <p className="statistics__number">+13 000</p>
          <p className="statistics__description">Egresados</p>
        </div>
      </div>
      <div className="banner-statistics__actions">
        <Link href="/iniciar-sesion">
          <Button className="banner-statistics__button" type="secondary">
            Accede hoy
          </Button>
        </Link>
      </div>
    </BannerBackground>
  );
};

export default BannerStatistics;
