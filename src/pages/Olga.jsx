import useMusic from "../Hook/useMusic";
import TeacherCourseCard from "../Cards/TeacherCourseCard";

const COURSES = ["Фортепиано", "Вокал"];

export default function Olga({ openBooking }) {
  const { cours, loadingM, errorM } = useMusic();
  const Courses = cours.filter((c) => COURSES.includes(c.title));
  return (
    <section className="Pages">
      <h2>Ольгa Никешинa</h2>
      <h3>Ваш учитель музыки, создательница школы</h3>
      <h3>«Начать играть можно в любом возрасте»</h3>

      <div className="Pages-card">
        <div className="Pages-image">
          <img
            src="https://static.tildacdn.com/tild3535-6534-4264-a464-376439623066/ChatGPT_Image_18__20.png"
            alt="Ольгa Никешинa"
            loading="lazy"
          />
        </div>

        <div className="Pages-info">
          <p>
            Моя специализация — помогать ученикам раскрываться, узнавать себя и
            свои возможности через фортепиано и вокал.{" "}
          </p>
          <p>
            Моя музыкальная история — нестандартна. У меня более десяти лет
            работы в сфере строительства! Но однажды любимое увлечение —
            фортепиано и вокал — стало настолько важной частью жизни, что
            превратилось в профессию.{" "}
          </p>
          <p>
            Мой путь в преподавании начался с обучения взрослых, которые никогда
            раньше не занимались музыкой. Они приходили ко мне с мечтой — и
            оставались с верой в себя. Потому что я точно знаю: музыка доступна
            каждому независимо от возраста и подготовки. Со временем я стала
            работать с детьми, а также с теми, кто вновь захотел вернуться к
            музыке спустя годы.{" "}
          </p>
          <p>
            Постепенно моя деятельность выросла в желание создать школу музыки!
            Такую, где и дети, и взрослые учатся музыке с радостью, развивают
            свои способности, раскрывают таланты - через игру на музыкальных
            инструментах, вокал, совместное творчество, выступления.
          </p>
          <h3>
            Если вы мечтали впустить музыку в свою жизнь — самое время
            попробовать!
          </h3>

          <button
            className="btn btn-outline-success"
            type="button"
            onClick={openBooking}
          >
            Записаться на пробный урок
          </button>
        </div>
      </div>
      <div className="Pages-courses">
        <h3 className="Pages-courses-title">Направления</h3>

        {loadingM && <p role="status">Загружаем...</p>}
        {errorM && (
          <div className="alert alert-danger" role="alert">
            {errorM}
          </div>
        )}

        {!loadingM && !errorM && (
          <div className="Pages-courses-grid">
            {Courses.map((course) => (
              <TeacherCourseCard key={course.id} cours={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
