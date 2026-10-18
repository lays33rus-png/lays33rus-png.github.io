import usePrice from "../Hook/usePrice";
import PriceCard from "../Cards/PriceCard";
import { Link } from "react-router-dom";

export default function PricePage({ openBooking }) {
  const { price, loadingP, errorP, retryP } = usePrice();

  return (
    <section>
      <main className="piano-lessons">
        <h2>Цены на обучение</h2>

        <div className="prices-intro">
          <div className="prices-intro__left">
            <p className="prices-intro__lead">Перед началом обучения</p>
            <p className="prices-intro__lead">приглашаем всех желающих</p>
            <p className="prices-intro__lead">прийти на пробный урок.</p>
          </div>

          <div className="prices-intro__right">
            <h3 className="lesson-prices-title">Пробное занятие — это</h3>
            <ul className="lesson-list">
              <li>прослушивание</li>
              <li>знакомство с преподавателем</li>
              <li>подбор наиболее эффективной методики обучения</li>
            </ul>
            <button className="btn btn-outline-success" type="button" onClick={openBooking}>
              Записаться на пробный урок
            </button>
          </div>
        </div>
      </main>

      <main className="prices">
        {loadingP && <p role="status"> Загружаем...</p>}
        {errorP && (
          <div className="alert alert-danger" role="alert">
            {errorP}{" "}
            <button type="button" onClick={retryP}>
              {" "}
              Повторить
            </button>
          </div>
        )}
        {!loadingP && !errorP && (
          <>
            <div className="price-groups">
              {["Фортепиано", "Скрипка", "Вокал", "Гитара"].map((category) => (
                <section key={category} className="price-group">
                  <h3 className="price-group-title">{category}</h3>
                  <div className="cards-price">
                    {price
                      .filter((p) => p.category === category)
                      .map((price) => (
                        <PriceCard key={price.id} price={price} />
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}
      </main>
    </section>
  );
}
