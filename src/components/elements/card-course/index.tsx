"use client";

import Button from "@/components/ui/button";
import CartIcon from "@/components/ui/icons/cart";
import PlayPreviewIcon from "@/components/ui/icons/play-preview";
import { FC } from "react";
import "./styles.scss";
import { ItemCourse } from "@/components/containers/cards-courses";
import Link from "next/link";
import Image from "next/image";
import useCarProductsStore from "@/store/zustand";

const CardCourse: FC<ItemCourse> = ({ ...item }) => {
  const { addProduct } = useCarProductsStore();

  return (
    <div className="card-course">
      <div className="course-banner">
        <Image
          src="/images/jpg/image_fit.jpg"
          alt={item.title}
          width={200}
          height={120}
        />
        <div className="course-banner__preview">
          <div className="course-tags">
            <div className="course-tags__tag course-tags__tag--yellow">
              {item.road.name}
            </div>
            <div className="course-tags__tag course-tags__tag--black">Ruta</div>
          </div>
          <Link href={`/cursos/${item.slug}`}>
            <p>Presentación</p>
            <PlayPreviewIcon />
          </Link>
        </div>
      </div>
      <div className="course-information">
        <div>
          <Link href={`/cursos/${item.road.slug}/${item.slug}`}>
            <p className="course-information__title">{item.title}</p>
          </Link>
          <p className="course-information__subtitle">{item.coach.name}</p>
        </div>
        <div className="information-price">
          <span>Precio</span>
          <p className="information-price__price">S/ {item.priceCurrent}</p>
          <p className="information-price__old-price">S/ {item.price}</p>
        </div>
      </div>
      <p className="card-course__label">Pertenece a Ruta de {item.road.name}</p>
      <div className="course-actions">
        <button
          className="course-actions__cart"
          onClick={() => addProduct(item)}
        >
          <CartIcon />
        </button>
        <Button className="course-actions__buy">Comprar Curso</Button>
      </div>
    </div>
  );
};

export default CardCourse;
