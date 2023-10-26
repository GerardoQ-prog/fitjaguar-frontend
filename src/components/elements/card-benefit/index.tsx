import Image from "next/image";
import React from "react";
import "./styles.scss";

export interface ICardBenefitProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const CardBenefit: React.FC<ICardBenefitProps> = ({
  title,
  description,
  image,
  alt,
}) => {
  return (
    <div className="card-benefit">
      <div className="card-benefit__image">
        <Image alt={alt} src={image} width={60} height={60} />
      </div>
      <div className="card-content">
        <p className="card-content__title">{title}</p>
        <p className="card-content__description">{description}</p>
      </div>
    </div>
  );
};

export default CardBenefit;
