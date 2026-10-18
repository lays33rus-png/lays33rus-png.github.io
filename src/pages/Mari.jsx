import useMusic from "../Hook/useMusic";
import TeacherCourseCard from "../Cards/TeacherCourseCard";

const COURSES = ["Скрипка"];
export default function Mari({ openBooking }) {
  const { cours, loadingM, errorM } = useMusic();
    const Courses = cours.filter((c) => COURSES.includes(c.title));
  return (
    <section className="Pages">
      <h2>Марина Сафронова</h2>
      <h3>
        Выпускница Московской консерватории им. П. И. Чайковского, скрипачка и
        преподаватель с 7-летним педагогическим опытом.
      </h3>

      <div className="Pages-card">
        <div className="Pages-image">
          <img
            src="https://static.tildacdn.com/tild3735-6664-4537-a233-613733323834/ChatGPT_Image_18__20.png"
            alt="Марина Сафронова"
            loading="lazy"
          />
        </div>

        <div className="Pages-info">
          <p>
            Работает с детьми и взрослыми разного уровня, в том числе
            начинающими. Ученики Марины поступают в ведущие музыкальные учебные
            заведения и заметно повышают уровень исполнительского мастерства.
          </p>
          <p>
            Марина активно выступает сольно и в ансамблях, поэтому соединяет в
            преподавании академическую школу, сценический опыт и индивидуальный
            подход к каждому ученику.
          </p>

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
