import Subtitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";
import React from "react";
import "./styles.scss";
import Button from "@/components/ui/button";
import Image from "next/image";
import WrapperContent from "../wrapper-content";

const About = () => {
  return (
    <WrapperContent className="about" component="div">
      <div className="about-information">
        <div>
          <Title className="about-information__title">
            Te ayudamos a encontrar al experto ideal para mejorar en tus
            entrenamientos.
          </Title>
          <Subtitle className="about-information__subtitle">
            Descubre la experiencia de interactuar con estudiantes, atletas y
            colegas de todo el mundo. Con FitJaguar podrás obtener mejores
            resultados.
          </Subtitle>
          <Button>Accede hoy</Button>
        </div>
        <div>
          <Image
            src="/images/png/about.png"
            alt="About Image"
            width={450}
            height={280}
            className="about-information__image"
          />
        </div>
      </div>
      <div className="about-slider">
        <Title className="about-slider__title">
          Inscríbete en la plataforma dedicada a hacerte crecer en el mundo
          Fitness
        </Title>
        <Subtitle className="about-slider__subtitle">
          Con FitJaguar accede a miles de posibilidades para mejorar tus
          entrenamientos
        </Subtitle>
      </div>
    </WrapperContent>
  );
};

export default About;
