"use client";

import { usePathname } from "next/navigation";
import ConfigurationIcon from "../icons/configuration";
import DashboardIcon from "../icons/dashboard";
import FlashIcon from "../icons/flash";
import "./styles.scss";

interface IAsideProps {
  children: React.ReactNode;
}

const Aside: React.FC<IAsideProps> = ({ children }) => {
  const pathname = usePathname();

  const asideLinks = [
    {
      name: "Dashboard",
      icon: (
        <DashboardIcon
          fill={pathname === "/administrador" ? "#FEC600" : "#C6C6C6"}
        />
      ),
      isActive: pathname === "/administrador",
    },
    {
      name: "Cursos",
      icon: (
        <FlashIcon
          fill={
            pathname.includes("/administrador/cursos") ? "#FEC600" : "#C6C6C6"
          }
        />
      ),
      isActive: pathname.includes("/administrador/cursos"),
    },
    {
      name: "Recursos",
      icon: <FlashIcon />,
    },
    {
      name: "Certificados",
      icon: <FlashIcon />,
    },
    {
      name: "Código de activación",
      icon: <FlashIcon />,
    },
    {
      name: "Configuración",
      icon: <ConfigurationIcon />,
    },
  ];

  return (
    <div className="aside">
      <aside className="aside-menu">
        {asideLinks.map((item, index) => (
          <div
            key={index}
            className={`aside-menu__item ${
              item.isActive ? "aside-menu__item--active" : ""
            }`}
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </aside>
      {children}
    </div>
  );
};

export default Aside;
