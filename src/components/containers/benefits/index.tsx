import React, { FC } from "react";
import "./styles.scss";
import CardBenefit from "@/components/elements/card-benefit";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";

export type ItemBenefit = {
  title: string;
  description: string;
  image: string;
};

type BenefitsContent = {
  title: string;
  subtitle: string;
  items: ItemBenefit[];
};

interface IBenefitsProps {
  benefits: BenefitsContent;
}

const Benefits: FC<IBenefitsProps> = ({ benefits }) => {
  return (
    <div className="benefits">
      <Title className="benefits__title">{benefits.title}</Title>
      <Subtitle className="benefits__subtitle">{benefits.subtitle}</Subtitle>
      <div className="benefits__cards">
        {benefits.items.map((item, index) => (
          <CardBenefit key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
