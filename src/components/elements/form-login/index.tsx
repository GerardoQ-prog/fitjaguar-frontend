import React from "react";
import "./styles.scss";
import Button from "@/components/ui/button";
import ButtonSecondary from "@/components/ui/button-secondary";
import BannerBackground from "@/components/containers/banner-background";
import Separator from "@/components/ui/separator";
import Input from "@/components/ui/input";

const FormLogin = () => {
  return (
    <>
      <Separator height="100px" />
      <BannerBackground
        image="/images/png/background-home.png"
        className="form-login"
        alt="Background LogIn"
      >
        <div>
          <h1 className="form-login__title">
            Inicia tu nueva ruta de aprendizaje con nosotros
          </h1>
          <p className="form-login__subtitle">
            Inicia con FitJaguar Academy ahora
          </p>
        </div>
        <div className="card-login">
          <p className="card-login__title">Bienvenido de nuevo</p>
          <Input placeholder="Email" />
          <br />
          <Input placeholder="Contraseña" />
          <br />
          <Button className="card-login__button">Iniciar sesión</Button>
          <p className="card-login__forgot">¿Has olvidado la contraseña?</p>
          <ButtonSecondary>Crear cuenta</ButtonSecondary>
        </div>
      </BannerBackground>
    </>
  );
};

export default FormLogin;
