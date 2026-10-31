import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormulaCard from "../components/FormulaCard";
import ProgressBar from "../components/ProgressBar";
import { lessons } from "../data/lessons";

function getCompletedLessons() {
  try {
    return JSON.parse(localStorage.getItem("completedLessons") || "[]");
  } catch {
    return [];
  }
}

function Lesson() {
  const { id } = useParams();

  const lessonIndex = lessons.findIndex((item) => item.id === id);
  const lesson = lessons[lessonIndex];

  const [completed, setCompleted] = useState(() =>
    getCompletedLessons().includes(id)
  );

  if (!lesson) {
    return (
      <main className="page not-found">
        <h1>Mësimi nuk u gjet</h1>
        <p>Mësimi që kërkove nuk ekziston.</p>
        <Link to="/lessons" className="btn">
          Kthehu te mësimet
        </Link>
      </main>
    );
  }

  const previousLesson = lessons[lessonIndex - 1];
  const nextLesson = lessons[lessonIndex + 1];

  function toggleCompletion() {
    const completedLessons = getCompletedLessons();

    let updatedLessons;

    if (completed) {
      updatedLessons = completedLessons.filter(
        (lessonId) => lessonId !== lesson.id
      );
    } else {
      updatedLessons = completedLessons.includes(lesson.id)
        ? completedLessons
        : [...completedLessons, lesson.id];
    }

    localStorage.setItem(
      "completedLessons",
      JSON.stringify(updatedLessons)
    );

    setCompleted(!completed);
  }

  return (
    <main className="page lesson-page">
      <nav className="breadcrumb">
        <Link to="/">Ballina</Link>
        <span>/</span>
        <Link to="/lessons">Mësimet</Link>
        <span>/</span>
        <span>{lesson.title}</span>
      </nav>

      <header className="lesson-header">
        <span className="section-eyebrow">
          MËSIMI {lesson.number} / {lessons.length}
        </span>

        <h1>{lesson.title}</h1>

        <p>{lesson.description}</p>

        <div className="lesson-header__meta">
          <span>{lesson.duration}</span>
          <span>{lesson.topics.length} tema</span>
          <span>{completed ? "I përfunduar" : "Në pritje"}</span>
        </div>
      </header>

      <section className="lesson-progress">
        <ProgressBar
          value={completed ? 100 : 0}
          label="Statusi i mësimit"
        />
      </section>

      <section className="lesson-content">
        {lesson.topics.map((topic, topicIndex) => (
          <article className="lesson-topic" key={topicIndex}>
            <div className="lesson-topic__heading">
              <span className="topic-number">
                {String(topicIndex + 1).padStart(2, "0")}
              </span>

              <h2>{topic.title}</h2>
            </div>

            <p className="lesson-topic__explanation">
              {topic.explanation}
            </p>

            <div className="formula-grid">
              {topic.formulas.map((formula, formulaIndex) => (
                <FormulaCard
                  key={`${topicIndex}-${formulaIndex}`}
                  title={`Formula ${formulaIndex + 1}`}
                  latex={formula}
                />
              ))}
            </div>
          </article>
        ))}
      </section>

      {lesson.example && (
        <section className="lesson-example">
          <span className="section-eyebrow">SHEMBULL I ZGJIDHUR</span>
          <h2>{lesson.example.title}</h2>

          <div className="example-steps">
            {lesson.example.steps.map((step, index) => (
              <article className="example-step" key={index}>
                <div className="example-step__number">
                  {index + 1}
                </div>

                <div className="example-step__content">
                  <h3>{step.title}</h3>
                  <FormulaCard
                    title=""
                    latex={step.expression}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="lesson-completion">
        <div>
          <h2>{completed ? "Mësimi u përfundua" : "Përfundove mësimin?"}</h2>
          <p>
            {completed
              ? "Ky mësim është regjistruar në progresin tënd."
              : "Shënoje si të përfunduar për të ruajtur progresin."}
          </p>
        </div>

        <button
          type="button"
          className={completed ? "btn btn--outline" : "btn"}
          onClick={toggleCompletion}
        >
          {completed ? "Hiq përfundimin" : "Përfundo mësimin"}
        </button>
      </section>

      <nav className="lesson-navigation">
        {previousLesson ? (
          <Link
            to={`/lessons/${previousLesson.id}`}
            className="btn btn--outline"
          >
            ? Mësimi paraprak
          </Link>
        ) : (
          <span />
        )}

        {nextLesson ? (
          <Link
            to={`/lessons/${nextLesson.id}`}
            className="btn"
          >
            Mësimi tjetër ?
          </Link>
        ) : (
          <Link to="/practice" className="btn">
            Fillo ushtrimet ?
          </Link>
        )}
      </nav>
    </main>
  );
}

export default Lesson;
