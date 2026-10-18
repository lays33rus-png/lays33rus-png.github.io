import useMusic from "../Hook/useMusic";
import TeacherCourseCard from "../Cards/TeacherCourseCard";

const COURSES = ["Гитара"];
export default function Nikita({ openBooking }) {
  const { cours, loadingM, errorM } = useMusic();
    const Courses = cours.filter((c) => COURSES.includes(c.title));
  return (
    <section className="Pages">
      <h2>Никита Паршунин</h2>
      <h3>
        Преподаватель акустической и электрогитары со стажем более 20 лет.
      </h3>

      <div className="Pages-card">
        <div className="Pages-image">
          <img
            src="https://static.tildacdn.com/tild3939-6134-4339-a365-343839343162/913018b1-e3ee-49f8-9.jpeg"
            alt="Никита Паршунин"
            loading="lazy"
          />
        </div>

        <div className="Pages-info">
          <p>
            Помогает освоить игру с нуля и развить продвинутые навыки:
            аккомпанемент, фингерстайл, аранжировку, импровизацию, теорию музыки
            и джазовую гармонию. В основе его подхода — системное понимание
            музыки, которое помогает играть свободно, осознанно и уверенно.{" "}
          </p>
          <p>
            За плечами Никиты — два высших образования, победы в российских и
            международных конкурсах, студийная работа и многолетний опыт
            выступлений в рок-, джазовых и оркестровых составах.
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
