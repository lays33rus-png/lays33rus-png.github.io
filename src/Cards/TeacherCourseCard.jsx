import { Link } from "react-router-dom";

export default function TeacherCourseCard({ cours }) {
  const content = (
    <div className="teacher-course-text">
      <span className="teacher-course-name">{cours.title}</span>
      <span className="teacher-course-arrow">→</span>
    </div>
  );

  if (!cours.link) {
    return <div className="teacher-course-card">{content}</div>;
  }

  return (
    <Link to={cours.link} className="teacher-course-card">
      {content}
    </Link>
  );
}