import usePrice from "../Hook/usePrice";
import PriceCard from "../Cards/PriceCard";
import { Link } from "react-router-dom";

export default function Vocals({ openBooking }) {
  const { price, loadingP, errorP, retryP } = usePrice();

  return (
    <section className="vocals-lessons" id="vocals">
      <h2>Вокал</h2>

      <div className="lesson-grid">
        <div className="lesson-image">
          <img
            src="https://i.ibb.co/mrhfvdTw/close-up-asmr-recording.jpg"
            alt="вокал"
            loading="lazy"
          />
        </div>

        <div className="lesson-info">
          <h3 className="lesson-prices-title">Кому подходит</h3>

          <ul className="lesson-list">
            <li>Детям и взрослым</li>
            <li>Начинающим и продолжающим</li>
            <li>Тем, кто хочет начать петь с нуля</li>
            <li>Тем, кто хочет раскрыть голос</li>
            <li>Тем, кто хочет чувствовать себя свободнее в пении</li>
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
                {["Вокал"].map((category) => (
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
        <h3 className="lesson-teachers-title">Преподаватели по вокалу</h3>

        <div className="lesson-teachers-grid">
          <Link to="/Olga" className="teacherCard">
            <div className="teacherCard">
              <img
                src="https://static.tildacdn.com/tild3535-6534-4264-a464-376439623066/ChatGPT_Image_18__20.png"
                alt="Ольга Никешина"
                loading="lazy"
              />
              <p>Ольга Никешина</p>
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
