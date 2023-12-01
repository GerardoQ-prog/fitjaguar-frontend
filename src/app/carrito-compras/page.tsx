import ShopCar from "@/components/containers/shop-car";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import Title from "@/components/ui/title";
import React from "react";

const ShopCarPage = () => {
  return (
    <main>
      <Separator height="120px" />
      <WrapperContent>
        <Title component="h1">Mi carrito de compras</Title>
        <ShopCar />
      </WrapperContent>
    </main>
  );
};

export default ShopCarPage;
