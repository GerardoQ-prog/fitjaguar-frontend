import Image from "next/image";
import React from "react";
import "./styles.scss";
import { ItemBenefit } from "@/components/containers/benefits";

const CardBenefit: React.FC<ItemBenefit> = ({ title, description, image }) => {
  return (
    <div className="card-benefit">
      <div className="card-benefit__image">
        <Image alt={title} src={image} width={60} height={60} />
      </div>
      <div className="card-content">
        <p className="card-content__title">{title}</p>
        <p className="card-content__description">{description}</p>
      </div>
    </div>
  );
};

export default CardBenefit;
