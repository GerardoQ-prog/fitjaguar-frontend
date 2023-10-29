import Image from "next/image";
import React from "react";
import "./styles.scss";
import { ItemTestimonial } from "@/components/containers/testimonials";

const CardTestimonial: React.FC<ItemTestimonial> = ({ name, role, video }) => {
  return (
    <div className="card-testimonial">
      {/* <Image src={image} alt={alt} width={200} height={240} /> */}
      <p className="card-testimonial__title">{name}</p>
      <p className="card-testimonial__subtitle">{role}</p>
    </div>
  );
};

export default CardTestimonial;
