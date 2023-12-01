"use client";

import DeleteIcon from "@/components/ui/icons/delete";
import React from "react";
import "./styles.scss";
import useCarProductsStore from "@/store/zustand";

const CardShopCar = ({ ...item }) => {
  const { removeProduct } = useCarProductsStore();

  return (
    <div className="card-shopcar">
      <div className="shopcar-product">
        <p className="shopcar-product__name">{item.title}</p>
        <div className="shopcar-product__price">
          <span>Precio</span> S/ {item.priceCurrent}
        </div>
      </div>
      <div
        className="card-shopcar__delete"
        onClick={() => removeProduct(item.id)}
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CardShopCar;
