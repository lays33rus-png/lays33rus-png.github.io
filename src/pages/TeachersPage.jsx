import { Link } from "react-router-dom";

export default function TeachersPage() {
  return (
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
      </section>)}