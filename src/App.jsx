import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CoursCard from "./Cards/coursCard";
import PriceCard from "./Cards/PriceCard";
import useMusic from "./Hook/useMusic";
import usePrice from "./Hook/usePrice";
import Piano from "./pages/Piano";
import Guitar from "./pages/guitar";
import Violin from "./pages/violin";
import Vocals from "./pages/vocals";
import Layout from "./Layout";
import Olga from "./pages/Olga";
import Nikita from "./pages/Nikita";
import Mari from "./pages/Mari";
import Ksenia from "./pages/Ksenia";
import About from "./pages/About";
import PricePage from "./pages/PricePage";
import CoursPage from "./pages/CoursPage";
import TeachersPage from "./pages/TeachersPage";
import BookingModal from "./BookingModal";
import useBooking from "./Hook/useBooking";

export default function App() {
  const booking = useBooking();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout openBooking={booking.open} />}>
          <Route path="/" element={<Home openBooking={booking.open} />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/PricePage"
            element={<PricePage openBooking={booking.open} />}
          />
          <Route path="/CoursPage" element={<CoursPage />} />
          <Route path="/Piano" element={<Piano openBooking={booking.open} />} />
          <Route
            path="/Guitar"
            element={<Guitar openBooking={booking.open} />}
          />
          <Route
            path="/Violin"
            element={<Violin openBooking={booking.open} />}
          />
          <Route
            path="/Vocals"
            element={<Vocals openBooking={booking.open} />}
          />
          <Route path="/Olga" element={<Olga openBooking={booking.open} />} />
          <Route
            path="/Nikita"
            element={<Nikita openBooking={booking.open} />}
          />
          <Route path="/Mari" element={<Mari openBooking={booking.open} />} />
          <Route
            path="/Ksenia"
            element={<Ksenia openBooking={booking.open} />}
          />
          <Route path="/TeachersPage" element={<TeachersPage />} />
        </Route>
      </Routes>

      <BookingModal isOpen={booking.isOpen} onClose={booking.close} />
      <FloatingHome />
    </>
  );
}
function FloatingHome() {
  const [showTop, setShowTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (pathname === "/") return null;

  return (
    <>
      {showTop && (
        <Link to="/" className="float-home" aria-label="На главную">
          ⌂
        </Link>
      )}
    </>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function Home({ openBooking }) {
  const { cours, loadingM, errorM, retryM } = useMusic();
  const { price, loadingP, errorP, retryP } = usePrice();

  return (
    <main>
      <div className="hederLogo">
        <h1 className="Name">OnPiano</h1>
        <p>школа, где музыка начинается с вас</p>
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={openBooking}
        >
          Записаться на пробный урок
        </button>
      </div>
      <div className="Cours">
        <h2>Наши курсы</h2>

        {loadingM && <p role="status"> Загружаем...</p>}
        {errorM && (
          <div className="alert alert-danger" role="alert">
            {errorM}{" "}
            <button type="button" onClick={retryM}>
              {" "}
              Повторить
            </button>
          </div>
        )}
        {!loadingM && !errorM && (
          <div className="cards">
            {cours.map((course) => (
              <CoursCard key={course.id} cours={course} />
            ))}
          </div>
        )}
      </div>
      <section className="prices">
        <h2>Цены на обучение</h2>

        {/*  
        <p className="priceForm">
          Перед началом обучения мы приглашаем всех желающих прийти на пробный
          урок.
        </p>
        <p className="priceForm">
          Пробное занятие — это прослушивание, знакомство с преподавателем и
          подбор наиболее эффективной методики обучения, с помощью которой вы
          сможете достигнуть своей творческой цели.
        </p>
        <button className="btn btn-outline-success" type="button">
          Записаться на пробный урок
        </button>
        */}

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
      </section>
      <h2>О нас</h2>
      <div className="info">
        <h3>Школа музыки Ольги Никешиной</h3>
        <p>
          — пространство, где дети и взрослые учатся музыке без страха, давления
          и ощущения «не получится».
        </p>
        <p>
          Мы работаем с начинающими и с теми, кто когда-то занимался музыкой, но
          хочет вернуться к ней снова. Помогаем желающим повысить свои
          профессиональные навыки и подготовиться к поступлению в музыкальные
          учебные заведения.
        </p>
        <p>
          В школе можно обучаться игре на фортепиано, скрипке и гитаре,
          заниматься вокалом и постепенно развивать музыкальные способности в
          комфортном для себя темпе.{" "}
        </p>
        <p>
          Для нас важно не просто научить человека правильно брать ноты или
          исполнять произведения. Музыка становится способом раскрыть себя,
          почувствовать свои возможности и обрести уверенность.{" "}
        </p>
        <p>
          Мы уверены: музыкальность можно развивать, а начать заниматься музыкой
          можно в любом возрасте.
        </p>
        <p>
          <strong>
            Главное — не соответствовать чьим-то ожиданиям, а услышать себя,
            сделать первый шаг и идти в своем темпе.
          </strong>
        </p>
      </div>
      <section className="teachers">
        <h2>Наши преподаватели</h2>
        <div className="teacher">
          <Link to="/Olga" className="teacherCard">
            <div className="teacherCard">
              <img src="https://static.tildacdn.com/tild3535-6534-4264-a464-376439623066/ChatGPT_Image_18__20.png" />
              <p>Ольга Никешина</p>
            </div>
          </Link>
          <Link to="/Nikita" className="teacherCard">
            <div className="teacherCard">
              <img src="https://static.tildacdn.com/tild3939-6134-4339-a365-343839343162/913018b1-e3ee-49f8-9.jpeg" />
              <p>Никита Паршунин</p>
            </div>
          </Link>
          <Link to="/Mari" className="teacherCard">
            <div className="teacherCard">
              <img src="https://static.tildacdn.com/tild3735-6664-4537-a233-613733323834/ChatGPT_Image_18__20.png" />
              <p>Марина Сафронова</p>
            </div>
          </Link>
          <Link to="/Ksenia" className="teacherCard">
            <div className="teacherCard">
              <img src="https://static.tildacdn.com/tild6235-6163-4439-a437-376265353730/ChatGPT_Image_20__20.png" />
              <p>Ксения Земляникина</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="contacts" id="contacts">
        <h2>Контакты</h2>

        <div className="contacts-layout">
          <div className="contacts-list">
            <div className="contacts-item">
              <div>
                <h3>Адрес</h3>
                <p>г. Москва, Лавров переулок 8с1</p>
                <p className="contacts-muted">м. Таганская, м. Пролетарская </p>
                <p className="contacts-muted">5 минут пешком</p>
              </div>
            </div>

            <div className="contacts-item">
              <div>
                <h3>Телефон</h3>
                <a href="tel:+79939209509">+7 993 920 9509</a>
                <p className="contacts-muted">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>

            <div className="contacts-item">
              <div>
                <h3>Почта</h3>
                <a href="mailto:onmusicschool@onpiano.ru">onmusicschool@onpiano.ru</a>
                <p className="contacts-muted">Ответим в течение дня</p>
              </div>
            </div>

            <div className="contacts-item">
              <div>
                <h3>Соцсети</h3>
                <div className="contacts-socials">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="social-btn social-telegram"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="ВКонтакте"
                    className="social-btn social-vk"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M13.16 17.32c-5.16 0-8.1-3.54-8.22-9.42h2.58c.08 4.32 1.99 6.15 3.5 6.53V7.9h2.43v3.72c1.5-.16 3.07-1.87 3.6-3.72h2.43c-.41 2.28-2.1 3.99-3.31 4.69 1.21.56 3.14 2.05 3.87 4.73h-2.68c-.58-1.78-2.01-3.16-3.91-3.37v3.37h-.29z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/79939209509"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="social-btn social-whatsapp"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contacts-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A831f9e8b59bde9aeef0f5659a823dfef9e907686534b6de896a0eb05d3308242&source=constructor"
              width="100%"
              height="100%"
              title="Карта — OnPiano"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contacts-cta">
          <p>
            Не знаете, с чего начать? Приходите на пробный урок — это бесплатно.
          </p>
          <button
            className="btn-outline-success-dark"
            type="button"
            onClick={openBooking}
          >
            Записаться на пробный урок
          </button>
        </div>
      </section>
    </main>
  );
}
