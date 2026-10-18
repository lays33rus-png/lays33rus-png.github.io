import useMusic from "../Hook/useMusic";
import CoursCard from "../Cards/coursCard";

export default function CoursPage() {
  const { cours, loadingM, errorM, retryM } = useMusic();

  return (
    <section className="Cours">
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
    </section>
  );
}
