"use client";

import Link from "next/link";
import React from "react";
import "./styles.scss";
import Image from "next/image";
import Spotlight from "../spotlight";
import { usePathname } from "next/navigation";
import { useOpen } from "@/hooks/use-open";

const Menu: React.FC = () => {
  const pathname = usePathname();
  const { handleClose, handleOpen, isOpen } = useOpen();

  const menuLinks = [
    {
      name: "Inicio",
      href: "/",
      active: pathname === "/",
    },
    {
      name: "Cursos",
      href: "/cursos",
      active: pathname === "/cursos",
    },
    {
      name: "Rutas",
      href: "/rutas",
      active: pathname === "/rutas",
    },
    {
      name: "Workshops",
      href: "/workshops",
      active: pathname === "/workshops",
    },
    {
      name: "Herramientas",
      href: "/herramientas",
      active: pathname === "/herramientas",
      tag: "Gratis",
    },
  ];

  return (
    <div className="menu">
      {menuLinks.map((link) => (
        <Link
          href={link.href}
          className={`menu__item ${link.active ? "menu__item--active" : ""}`}
          key={link.name}
        >
          <p>
            {link.name}
            {link.tag && <span>{link.tag}</span>}
          </p>
        </Link>
      ))}
      <div className="menu__search" onClick={handleOpen}>
        <Image
          src="/images/svg/icon_search.svg"
          alt="icon_search"
          width={20}
          height={20}
        />
        <p>Buscar</p>
      </div>
      <Spotlight isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default Menu;
