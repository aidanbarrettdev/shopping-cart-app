import React, { useEffect, useState } from "react";
import Goods from "../componets/Goods";
import useFetch from "../hooks/useFetch";

export default function Shop() {
  const { data: goods } = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      <div>food</div>

      {goods && <Goods goods={goods} />}
    </div>
  );
}
