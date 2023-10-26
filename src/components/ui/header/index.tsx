import Image from "next/image";
import React from "react";
import "./styles.scss";
import Menu from "../menu";
import LinkProfile from "../link-profile";
import Link from "next/link";
import WrapperContent from "@/components/containers/wrapper-content";

const Header = () => {
  return (
    <header className="header-container">
      <WrapperContent className="header-container__wrapper" component="nav">
        <Link href="/">
          <Image
            src="/images/svg/ftgo_logo.svg"
            alt="logo"
            width="100"
            height="100"
          />
        </Link>
        <Menu />
        <LinkProfile />
      </WrapperContent>
    </header>
  );
};

export default Header;
