import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import Image from "next/image";
import { FC } from "react";
import "./styles.scss";

type Coach = {
  name: string;
  slug: string;
  photo: string;
};

interface ICardsCoachProps {
  coach: Coach;
}

const CardCoach: FC<ICardsCoachProps> = ({ coach }) => {
  return (
    <div className="card-coach">
      {coach ? (
        <>
          <Image src={coach.photo} alt={coach.name} width={156} height={156} />
          <div className="card-coach__information">
            <Title>{coach.name}</Title>
            <span>Profesor</span>
            <p className="card-coach__text">
              ¿Deseas iniciar tu nueva rutina y empezar a trabajar mejor tus
              hábitos saludables?, ¡Pues esta es la mejor manera! ¿Deseas
              iniciar tu nueva rutina
            </p>
          </div>
          <div>
            <Button className="card-coach__button">Ver más cursos</Button>
            <Button className="card-coach__button">Ver mentoría</Button>
          </div>
        </>
      ) : (
        <>
          <Title>Hecho por FitJaguar</Title>
          <Image
            src="/images/svg/ftgo_logo.svg"
            alt="logo"
            width="100"
            height="100"
          />
        </>
      )}
    </div>
  );
};

export default CardCoach;
