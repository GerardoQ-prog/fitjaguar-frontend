import React, { FC } from "react";
import "./styles.scss";
import CardTestimonial from "@/components/elements/card-testimonial";
import Link from "next/link";
import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";

export type ItemTestimonial = {
  video: string;
  name: string;
  role: string;
};

type TestimonialsContent = {
  title: string;
  subtitle: string;
  items: ItemTestimonial[];
};
interface ITestimonialsProps {
  testimonials: TestimonialsContent;
}

const Testimonials: FC<ITestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <Title className="testimonials__title">
        Lo que opinan nuestros estudiantes
      </Title>
      <Subtitle className="testimonials__subtitle">
        Nuestra experiencia se regleja en nuestros estudiantes y sus historias
        de exito
      </Subtitle>
      <div className="testimonials__cards">
        {/* {testimonials.items.map((item, index) => (
          <CardTestimonial key={index} {...item} />
        ))} */}
      </div>
      <div className="testimonials__actions">
        <Link href="/cursos">
          <Button className="testimonials__button">Ver cursos</Button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
