"use client";

import React, { memo } from "react";
import "./styles.scss";
import Image from "next/image";

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
        <Image
          src="/images/svg/icon_search.svg"
          alt="icon_search"
          width={40}
          height={40}
        />
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
