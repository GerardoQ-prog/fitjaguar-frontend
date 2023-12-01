import Image from "next/image";
import React from "react";
import "./styles.scss";

const HeaderAdmin = () => {
  return (
    <div className="header-admin">
      <Image
        src="/images/svg/ftacademy_logo.svg"
        alt="logo academy"
        width={200}
        height={50}
      />
    </div>
  );
};

export default HeaderAdmin;
