"use client";

import Link from "next/link";
import { useState, FC } from "react";
import "./styles.scss";
import Image from "next/image";
import Spotlight from "../spotlight";
import { usePathname } from "next/navigation";
import { useOpen } from "@/hooks/use-open";
import OptionsMenu from "../options-menu";

const Menu: FC = () => {
  const pathname = usePathname();
  const { handleClose, handleOpen, isOpen } = useOpen();
  const {
    handleClose: handleCloseOptionsMenu,
    handleOpen: hanldleOpenOptionsMenu,
    isOpen: isOpenOptionsMenu,
  } = useOpen();

  const [optionsMenu, setOptionsMenu] = useState({
    name: "Rutas",
    options: [] as any[],
    viewAll: true,
  });

  const handleOptionsMenu = (option: string) => {
    if (option === "Rutas") {
      setOptionsMenu({
        name: option,
        options: [
          {
            name: "Crossfit",
            path: "/cursos/crossfit",
          },
          {
            name: "Weightlifting",
            path: "/cursos/weightlifting",
          },
        ],
        viewAll: true,
      });
    }

    if (option === "Herramientas") {
      setOptionsMenu({
        name: option,
        options: [
          {
            name: "Videos",
            path: "/videos",
          },
          {
            name: "Documentos",
            path: "/documentos",
          },
        ],
        viewAll: false,
      });
    }

    hanldleOpenOptionsMenu();
  };

  const menuLinks = [
    {
      name: "Inicio",
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "Cursos",
      href: "/cursos",
      isActive: pathname.includes("/cursos"),
    },
    // {
    //   name: "Rutas",
    // },
    {
      name: "Herramientas",
      tag: "Gratis",
    },
  ];

  return (
    <div className="menu">
      {menuLinks.map((link) => (
        <div key={link.name}>
          {link.href ? (
            <Link
              href={link.href}
              className={`menu__item ${
                link.isActive ? "menu__item--active" : ""
              }`}
              key={link.name}
              onClick={handleCloseOptionsMenu}
            >
              <p>{link.name}</p>
            </Link>
          ) : (
            <div
              className={`menu__item ${
                link.isActive ? "menu__item--active" : ""
              }`}
              onClick={() => handleOptionsMenu(link.name)}
            >
              <p>
                {link.name}
                {link.tag && <span>{link.tag}</span>}
              </p>
            </div>
          )}
        </div>
      ))}
      <div
        className="menu__search"
        onClick={() => {
          handleCloseOptionsMenu();
          handleOpen();
        }}
      >
        <Image
          src="/images/svg/icon_search.svg"
          alt="icon_search"
          width={20}
          height={20}
        />
        <p>Buscar</p>
      </div>
      <OptionsMenu
        isOpen={isOpenOptionsMenu}
        handleClose={handleCloseOptionsMenu}
        optionsMenu={optionsMenu}
      />
      <Spotlight isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default Menu;
