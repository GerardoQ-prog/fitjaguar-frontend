"use client";

import Image from "next/image";
import React from "react";
import Button from "../button";
import "./styles.scss";
import Link from "next/link";
import useCarProductsStore from "@/store/zustand";

const LinkProfile = () => {
  const { products } = useCarProductsStore();

  return (
    <div className="link-profile">
      <Link href="/carrito-compras" style={{ position: "relative" }}>
        <Image
          src="/images/svg/icon_cart.svg"
          alt="icon_cart"
          width={30}
          height={30}
          style={{ cursor: "pointer" }}
        />
        <div className="link-profile__car">{products.length}</div>
      </Link>
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
