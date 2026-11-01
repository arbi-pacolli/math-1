import { useState } from "react";
import LessonCard from "../components/LessonCard";
import { lessons } from "../data/lessons";

function getCompletedLessons() {
  try {
    return JSON.parse(localStorage.getItem("completedLessons") || "[]");
  } catch {
    return [];
  }
}

function Lessons() {
  const [completedLessons] = useState(getCompletedLessons);

  const completedCount = lessons.filter((lesson) =>
    completedLessons.includes(lesson.id)
  ).length;

  return (
    <main className="page lessons-page">
      <section className="page-header">
        <span className="section-eyebrow">PROGRAMI MËSIMOR</span>
        <h1>Të gjitha mësimet</h1>
        <p>
          Ndiq temat hap pas hapi dhe përfundo njohuritë e tua
          në matematikën trigonometrike.
        </p>
      </section>

      <section className="lessons-overview">
        <div>
          <strong>{completedCount}/{lessons.length}</strong>
          <span>Mësimet e përfunduara</span>
        </div>

        <div>
          <strong>{lessons.length - completedCount}</strong>
          <span>Mësimet e mbetura</span>
        </div>
      </section>

      <section className="lessons-list">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">MATERIALI</span>
            <h2>Temat e ligjëratës</h2>
          </div>
        </div>

        <div className="lesson-grid">
          {lessons.map((lesson) => {
            const completed = completedLessons.includes(lesson.id);

            return (
              <LessonCard
                key={lesson.id}
                number={lesson.number}
                title={lesson.title}
                status={completed ? "completed" : "not-started"}
                progress={completed ? 100 : 0}
                to={`/lessons/${lesson.id}`}
              />
            );
          })}
        </div>
      </section>

      <section className="lessons-note">
        <h3>Rekomandim për mësim</h3>
        <p>
          Ndiq renditjen e temave. Fillimisht kupto formulat e adicionit,
          pastaj vazhdo me formulat e këndit të dyfishtë dhe përgjysmë.
          Në fund, praktiko transformimet dhe ekuacionet trigonometrike.
        </p>
      </section>
    </main>
  );
}

export default Lessons;
