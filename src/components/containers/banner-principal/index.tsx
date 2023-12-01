import BannerBackground from "@/components/containers/banner-background";
import React from "react";
import "./styles.scss";
import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";

const BannerPrincipal = () => {
  return (
    <section>
      <Separator height="120px" />
      <BannerBackground
        image="/images/png/background-home.png"
        imageMobile="/images/png/background-home-mobile.png"
        className="banner-principal"
        alt="Banner Principal"
      >
        <Title className="banner-principal__title" component="h1">
          Enciende o potencia tu pasión por el fitness con nosotros.
        </Title>
        <Subtitle className="banner-principal__subtitle">
          FitJaguar es la plataforma que te conecta con los mejores del
          entrenamiento.
        </Subtitle>
        <Button className="banner-principal__button">Accede hoy</Button>
      </BannerBackground>
    </section>
  );
};

export default BannerPrincipal;
