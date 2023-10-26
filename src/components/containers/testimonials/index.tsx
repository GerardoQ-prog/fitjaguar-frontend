import React from "react";
import "./styles.scss";
import CardTestimonial, {
  ICardTestimonialProps,
} from "@/components/elements/card-testimonial";
import Link from "next/link";
import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";

const Testimonials = () => {
  const testimonials: ICardTestimonialProps[] = [
    {
      image: "/images/png/student1.png",
      alt: "Jen Garcia",
      name: "Jen Garcia",
      role: "Estudiante",
    },
    {
      image: "/images/png/student2.png",
      alt: "Marcos Segura",
      name: "Marcos Segura",
      role: "Estudiante",
    },
    {
      image: "/images/png/student3.png",
      alt: "Bethanny Silva",
      name: "Bethanny Silva",
      role: "Estudiante",
    },
    {
      image: "/images/png/student4.png",
      alt: "Jessy Armas",
      name: "Jessy Armas",
      role: "Estudiante",
    },
  ];

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
        {testimonials.map((item, index) => (
          <CardTestimonial key={index} {...item} />
        ))}
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
