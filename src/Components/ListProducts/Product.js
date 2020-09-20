import React from "react";

export default function Product({ product }) {
  const { nombre, price } = product;
  return (
    <>
      <p>{nombre}</p>
      <p>${price}</p>
    </>
  );
}
