"use client";

import React, { memo } from "react";
import "./styles.scss";
import Image from "next/image";
import SearchIcon from "../icons/search";

const Spotlight = memo(function Search({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  return isOpen ? (
    <div className="spotlight">
      <div className="spotlight__search">
        <SearchIcon />
        <input />
        <Image
          src="/images/svg/icon_close.svg"
          alt="icon_search"
          width={30}
          height={30}
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  ) : null;
});

export default Spotlight;
