import usePrice from "../Hook/usePrice";
import PriceCard from "../Cards/PriceCard";
import { Link } from "react-router-dom";

export default function Violin({ openBooking }) {
  const { price, loadingP, errorP, retryP } = usePrice();

  return (
    <section className="violin-lessons" id="violin">
      <h2>Уроки игры на скрипке</h2>

      <div className="lesson-grid">
        <div className="lesson-image">
          <img
            src="https://i.ibb.co/FbWJG5Td/123.jpg"
            style={{ filter: "brightness(0.88) contrast(1.05) sepia(0.12)" }}
            alt="скрипка"
            loading="lazy"
          />
        </div>

        <div className="lesson-info">
          <h3 className="lesson-prices-title">Кому подходит</h3>

          <ul className="lesson-list">
            <li>Детям от 5 лет и взрослым</li>
            <li>Начинающим и продолжающим</li>
            <li>Тем, кто хочет освоить скрипку с нуля</li>
            <li>Тем, кто хочет улучшить технику</li>
            <li>Тем, кто хочет повысить уровень в музыкальной школе</li>
            <li>Тем, кто хочет подготовиться к дальнейшему обучению</li>
          </ul>

          <button
            className="btn btn-outline-success"
            type="button"
            onClick={openBooking}
          >
            Записаться на пробный урок
          </button>

          <div className="lesson-prices">
            <h3 className="lesson-prices-title">Стоимость занятий</h3>

            {loadingP && <p role="status">Загружаем...</p>}

            {errorP && (
              <div className="alert alert-danger" role="alert">
                {errorP}{" "}
                <button type="button" onClick={retryP}>
                  Повторить
                </button>
              </div>
            )}

            {!loadingP && !errorP && (
              <div className="price-groups">
                {["Скрипка"].map((category) => (
                  <section key={category} className="price-group">
                    <div className="cards-price">
                      {price
                        .filter((p) => p.category === category)
                        .map((item) => (
                          <PriceCard key={item.id} price={item} />
                        ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lesson-teachers">
        <h3 className="lesson-teachers-title">Преподаватели по скрипке</h3>

        <div className="lesson-teachers-grid">
          <Link to="/Mari" className="teacherCard">
            <div className="teacherCard">
              <img
                src="https://static.tildacdn.com/tild3735-6664-4537-a233-613733323834/ChatGPT_Image_18__20.png"
                alt="Марина Сафронова"
                loading="lazy"
              />
              <p>Марина Сафронова</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
