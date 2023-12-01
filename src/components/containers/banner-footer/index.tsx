import React from "react";
import "./styles.scss";
import Button from "@/components/ui/button";
import Image from "next/image";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import WrapperContent from "../wrapper-content";

const BannerFooter = () => {
  return (
    <div>
      <WrapperContent className="banner-footer" component="section">
        <div>
          <Title className="banner-footer__title">
            Inicia tu nueva ruta de aprendizaje con nosotros
          </Title>
          <Subtitle className="banner-footer__subtitle">
            Inicia con FitJaguar Academy ahora
          </Subtitle>
          <Button className="banner-footer__button">Accede hoy</Button>
        </div>
        <div>
          <Image
            alt="Init Route"
            src="/images/svg/init-route.svg"
            width={400}
            height={300}
            className="banner-footer__image"
          />
        </div>
      </WrapperContent>
    </div>
  );
};

export default BannerFooter;
