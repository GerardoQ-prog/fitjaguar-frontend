import Button from "@/components/ui/button";
import CartIcon from "@/components/ui/icons/cart";
import PlayPreviewIcon from "@/components/ui/icons/play-preview";
import Image from "next/image";
import React from "react";
import "./styles.scss";

const CardCourse = () => {
  return (
    <div className="card-course">
      <div className="course-banner">
        <div className="course-tags">
          <div className="course-tags__tag course-tags__tag--yellow">
            Crossfit
          </div>
          <div className="course-tags__tag course-tags__tag--black">Ruta</div>
        </div>
        {/* <Image/> */}
        <div className="course-banner__preview">
          <p>Presentación</p>
          <PlayPreviewIcon />
        </div>
      </div>
      <div className="course-information">
        <div>
          <p className="course-information__title">
            Título completo para el nuevo curso
          </p>
          <p className="course-information__subtitle">Profesor del curso</p>
        </div>
        <div className="information-price">
          <span>Precio</span>
          <p className="information-price__price">S/ 1200</p>
          <p className="information-price__old-price">S/ 2000</p>
        </div>
      </div>
      <p className="card-course__label">Pertenece a Ruta de Crossfit básico</p>
      <div className="course-actions">
        <button className="course-actions__cart">
          <CartIcon />
        </button>
        <Button className="course-actions__buy">Comprar Curso</Button>
      </div>
    </div>
  );
};

export default CardCourse;
