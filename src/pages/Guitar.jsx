import usePrice from "../Hook/usePrice";
import PriceCard from "../Cards/PriceCard";
import { Link } from "react-router-dom";

export default function Guitar({ openBooking }) {
  const { price, loadingP, errorP, retryP } = usePrice();

  return (
    <section className="guitar-lessons" id="guitar">
      <h2>Уроки игры на гитаре</h2>

      <div className="lesson-grid">
        <div className="lesson-image">
          <img
            src="https://i.ibb.co/wrWyx8cg/headstock-classical-fingerboard-wood-fretboard.jpg"
            alt="гитара"
            loading="lazy"
          />
        </div>

        <div className="lesson-info">
          <h3 className="lesson-prices-title">Кому подходит</h3>

          <ul className="lesson-list">
            <li>Детям и взрослым</li>
            <li>Начинающим и продолжающим</li>
            <li>Тем, кто хочет освоить акустическую или электрогитару</li>
            <li>Тем, кто хочет развить технику</li>
            <li>Тем, кто хочет научиться аккомпанировать</li>
            <li>
              Тем, кто хочет научиться импровизировать и лучше понимать
              устройство музыки
            </li>
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
                {["Гитара"].map((category) => (
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
        <h3 className="lesson-teachers-title">Преподаватели по гитаре</h3>

        <div className="lesson-teachers-grid">
          <Link to="/Nikita" className="teacherCard">
          <div className="teacherCard">
            <img
              src="https://static.tildacdn.com/tild3939-6134-4339-a365-343839343162/913018b1-e3ee-49f8-9.jpeg"
              alt="Никита Паршунин"
              loading="lazy"
            />
            <p>Никита Паршунин</p>
          </div>
          </Link>
          <Link className="teacherCard">
          <div className="teacherCard">
            <img
              src="https://static.tildacdn.com/tild3033-3164-4232-a433-393330343961/__2026-09-19__150146.png"
              alt="Анна Эстер"
              loading="lazy"
            />
            <p>Анна Эстер</p>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
