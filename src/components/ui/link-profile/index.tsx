import Image from "next/image";
import React from "react";
import Button from "../button";
import "./styles.scss";
import Link from "next/link";

const LinkProfile = () => {
  return (
    <div className="link-profile">
      <Image
        src="/images/svg/icon_cart.svg"
        alt="icon_cart"
        width={30}
        height={30}
        style={{ cursor: "pointer" }}
      />
      <Link className="link-profile__login" href="/iniciar-sesion">
        Entrar
      </Link>
      <Link href="/iniciar-sesion">
        <Button>Crear cuenta</Button>
      </Link>
    </div>
  );
};

export default LinkProfile;
