import useMusic from "../Hook/useMusic";
import TeacherCourseCard from "../Cards/TeacherCourseCard";

const COURSES = ["Фортепиано"];

export default function Ksenia({ openBooking }) {
  const { cours, loadingM, errorM } = useMusic();
    const Courses = cours.filter((c) => COURSES.includes(c.title));
  return (
    <section className="Pages">
      <h2>Ксения Земляникина</h2>
      <h3>
        Сертифицированный педагог по системе Soft Mozart и преподаватель раннего
        музыкального развития.
      </h3>

      <div className="Pages-card">
        <div className="Pages-image">
          <img
            src="https://static.tildacdn.com/tild6235-6163-4439-a437-376265353730/ChatGPT_Image_20__20.png"
            alt="Ксения Земляникина"
            loading="lazy"
          />
        </div>

        <div className="Pages-info">
          <p>
            На занятиях по фортепиано дети и взрослые осваивают инструмент и
            нотную грамоту через наглядные интерактивные задания, развивая слух,
            чувство ритма, память, координацию и уверенность в своих силах.
            Методика подходит в том числе детям с особенностями развития.
          </p>
          <p>
            Для малышей от 1 до 3 лет Ксения Юрьевна проводит занятия вместе с
            родителями: музыка, движение, пение и игры помогают мягко
            познакомить ребёнка с музыкальным миром и пробудить интерес к
            творчеству.
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
