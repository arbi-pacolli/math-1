import { Link } from "react-router-dom";
import LessonCard from "../components/LessonCard";
import ProgressBar from "../components/ProgressBar";
import { lessons } from "../data/lessons";

function Home() {
  const completedLessons = (() => {
    try {
      return JSON.parse(localStorage.getItem("completedLessons") || "[]");
    } catch {
      return [];
    }
  })();

  const completedCount = completedLessons.length;
  const totalLessons = lessons.length;
  const overallProgress = Math.round(
    (completedCount / totalLessons) * 100
  );

  return (
    <main className="page home-page">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__label">MATHEMATIKA 1</span>
          <h1>Meso trigonometrine ne menyre interaktive.</h1>
          <p>
            Meso formulat, kupto shembujt dhe testo njohurite
            permes ushtrimeve praktike.
          </p>

          <div className="hero__actions">
            <Link to="/lessons" className="btn">
              Fillo mesimin
            </Link>
            <Link to="/practice" className="btn btn--outline">
              Praktiko
            </Link>
          </div>
        </div>
      </section>

      <section className="dashboard-stats">
        <article className="stat-card">
          <span className="stat-card__label">Mësimet gjithsej</span>
          <strong className="stat-card__value">{totalLessons}</strong>
        </article>

        <article className="stat-card">
          <span className="stat-card__label">Mësimet e përfunduara</span>
          <strong className="stat-card__value">{completedCount}</strong>
        </article>

        <article className="stat-card">
          <span className="stat-card__label">Progresi total</span>
          <strong className="stat-card__value">{overallProgress}%</strong>
        </article>
      </section>

      <section className="home-progress">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">PROGRESI YT</span>
            <h2>Vazhdo aty ku ke mbetur</h2>
          </div>
          <Link to="/lessons">Shiko të gjitha</Link>
        </div>

        <ProgressBar
          value={overallProgress}
          label="Progresi i mësimve"
        />
      </section>

      <section className="home-lessons">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">PROGRAMI MËSIMOR</span>
            <h2>Mësimet</h2>
          </div>
          <Link to="/lessons">Shiko të gjitha</Link>
        </div>

        <div className="lesson-grid">
          {lessons.slice(0, 3).map((lesson) => {
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

      <section className="quick-access">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">MJETET</span>
            <h2>Mjetet interaktive</h2>
          </div>
        </div>

        <div className="quick-access__grid">
          <Link to="/calculator" className="tool-card">
            <span className="tool-card__number">01</span>
            <h3>Kalkulatori trigonometrik</h3>
            <p>Llogarit vlerat e funksioneve trigonometrike.</p>
          </Link>

          <Link to="/unit-circle" className="tool-card">
            <span className="tool-card__number">02</span>
            <h3>Rrethi trigonometrik</h3>
            <p>Eksploro kendet dhe koordinatat ne rrethin njesi.</p>
          </Link>

          <Link to="/equations" className="tool-card">
            <span className="tool-card__number">03</span>
            <h3>Ekuacionet</h3>
            <p>Zgjidh ekuacione baze trigonometrike.</p>
          </Link>

          <Link to="/practice" className="tool-card">
            <span className="tool-card__number">04</span>
            <h3>Ushtrimet</h3>
            <p>Testo njohurite me pyetje interaktive.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
