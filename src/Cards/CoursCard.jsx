import { Link } from "react-router-dom";

export default function CoursCard({ cours }) {
  const content = <h1>{cours.title}</h1>;

  if (!cours.link) {
    return <article className="cours">{content}</article>;
  }

  return (
    <Link to={cours.link} className="cours cours-link">
      {content}
    </Link>
  );
}