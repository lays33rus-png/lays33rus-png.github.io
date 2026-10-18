import { Link, Outlet } from "react-router-dom";
import logo from "./assets/logo.svg";

export default function Layout({ openBooking }) {
  return (
    <main className="app">
      <header className="hero">
        <Link to="/" className="logo" aria-label="На главную">
          <img src={logo} alt="OnPiano" />
        </Link>

        <nav className="hero-nav">
          <ul className="eyebrow">
            <li><Link to="/CoursPage" className="menu">Курсы</Link></li>
            <li><Link to="/PricePage" className="menu">Цены</Link></li>
            <li><Link to="/About" className="menu">О нас</Link></li>
            <li><Link to="/TeachersPage" className="menu">Преподаватели</Link></li>
            <li><a href="/#contacts" className="menu">Контакты</a></li>
          </ul>

          <div className="hero-contact">
            
            <div className="hero-socials">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="social-btn social-telegram"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
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
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
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
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
                </svg>
              </a>
            </div>
            <div className="phone">
              <a href="tel:+79939209509">+7 993 920 9509</a>
              <button type="button" className="callback" onClick={openBooking}>
                заказать звонок
              </button>
            </div>

          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} OnPiano — школа музыки Ольги Никешиной
        </p>
        <p className="site-footer-muted">
          ИНН 000000000000 · ОГРН 0000000000000
        </p>
      </footer>
    </main>
  );
}