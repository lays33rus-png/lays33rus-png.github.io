import { useState } from "react";


export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
  });

    if (!isOpen) return null;

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Спасибо! Мы свяжемся с вами");
    setForm({ name: "", email: "", phone: "", time: "" }); 
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Записаться на пробный урок</h2>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          >
            <option value="">Удобное время для занятий</option>
            <option value="morning">Утро (9:00–12:00)</option>
            <option value="day">День (12:00–17:00)</option>
            <option value="evening">Вечер (17:00–21:00)</option>
            <option value="weekend">Выходные</option>
          </select>

          <button className="btn btn-submit" type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
}