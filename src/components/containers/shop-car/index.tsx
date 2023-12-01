"use client";

import CardShopCar from "@/components/elements/card-shop-car";
import Subtitle from "@/components/ui/subtitle";
import React from "react";
import "./styles.scss";
import useCarProductsStore from "@/store/zustand";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const ShopCar = () => {
  const { products } = useCarProductsStore();

  const priceTotal = products.reduce((acumulador, product) => {
    return acumulador + product.priceCurrent;
  }, 0);

  return (
    <div className="shop-car">
      <div className="car-detail">
        <div className="car-detail__wrapper">
          <Subtitle className="car-detail__title">Detalle de compra</Subtitle>
          <div className="cards-car-shop">
            {products.length > 0 ? (
              <div>
                {products.length &&
                  products.map((product) => (
                    <CardShopCar key={product.id} {...product} />
                  ))}
              </div>
            ) : (
              <p className="cards-car-shop__label">
                No hay productos agregados
              </p>
            )}
          </div>
        </div>
        <div className="car-detail__wrapper">
          <Subtitle>Resumen de compra</Subtitle>
          <div className="price-car-detail">
            <p className="price-car-detail__label">Tu compra:</p>
            <p>{products.length} curso(s)</p>
          </div>
          <div className="price-car-detail">
            <p className="price-car-detail__label">Total:</p>
            <p>S/{priceTotal}</p>
          </div>
          <div className="price-car-detail__buy">
            <Button>Pagar</Button>
          </div>
        </div>
      </div>
      <div className="discount">
        <Subtitle className="discount__title">Cupón de descuento</Subtitle>
        <div className="discount-information">
          <p>¿Cuentas con un código de descuento?</p>
          <div className="discount-information__action">
            <Input placeholder="Ingresa el cupón de descuento" />
            <Button>Aplicar</Button>
          </div>
        </div>
      </div>
      <div className="reference">
        <Subtitle className="reference__title">¿Te refirió un amigo?</Subtitle>
        <div className="reference-information">
          <p>Ingresa el código de usuario</p>
          <div className="reference-information__action">
            <Input placeholder="Ingresa el código de tu amigo" />
            <Button>Aplicar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCar;
