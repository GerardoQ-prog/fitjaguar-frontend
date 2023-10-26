import React from "react";
import "./styles.scss";
import CardBenefit, {
  ICardBenefitProps,
} from "@/components/elements/card-benefit";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";

const Benefits = () => {
  const benefits: ICardBenefitProps[] = [
    {
      image: "/images/svg/benefit_programation.svg",
      alt: "Programación a Distancia",
      description:
        "Podrás ver tu entrenamiento semanal y entrenar cuándo y donde quieras.",
      title: "Programación a Distancia",
    },
    {
      image: "/images/svg/benefit_education.svg",
      alt: "Educación continua",
      description:
        "Obtendrás material y casos de entrenamientos reales para marcar la diferencia.",
      title: "Educación continua",
    },
    {
      image: "/images/svg/benefit_mentoring.svg",
      alt: "Mentoría con expertos",
      description:
        "Encuentra al experto que necesitas para lograr tus objetivos.",
      title: "Mentoría con expertos",
    },
    {
      image: "/images/svg/benefit_marketplace.svg",
      alt: "Marketplace",
      description: "Vende tus entrenamientos o cursos en nuestra plataforma.",
      title: "Marketplace",
    },
    {
      image: "/images/svg/benefit_coaches.svg",
      alt: "Contrata a Coaches",
      description:
        "¿Estás listo para crecer? Encuentra aquí a tu equipo ideal.",
      title: "Contrata a Coaches",
    },
  ];

  return (
    <div className="benefits">
      <Title className="benefits__title">
        Con FitJaguar supera las barreras y límites del aprendizaje
      </Title>
      <Subtitle className="benefits__subtitle">
        Accede a miles de posibilidades para mejorar tus entrenamientos{" "}
      </Subtitle>
      <div className="benefits__cards">
        {benefits.map((item, index) => (
          <CardBenefit key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
