import Image from "next/image";
import React from "react";
import "./styles.scss";

export interface ICardTestimonialProps {
  image: string;
  alt: string;
  name: string;
  role: string;
}

const CardTestimonial: React.FC<ICardTestimonialProps> = ({
  image,
  alt,
  name,
  role,
}) => {
  return (
    <div className="card-testimonial">
      <Image src={image} alt={alt} width={200} height={240} />
      <p className="card-testimonial__title">{name}</p>
      <p className="card-testimonial__subtitle">{role}</p>
    </div>
  );
};

export default CardTestimonial;
