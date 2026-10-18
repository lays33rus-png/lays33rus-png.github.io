import { useState } from "react";

const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});


export default function PriceCard({ price }) {
  return (
    <article className="price">
      <div className="picture"></div>

      <h3>{price.title}</h3>
      <p className="time">{price.duration}</p>
      <p className="amount">{formatter.format(price.price).replace("₽", "руб.")}</p>

    </article>
  );
}
