import { useState } from "react";
import { Link } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion";
import ProgressBar from "../components/ProgressBar";
import { questions, getRandomQuestions } from "../data/questions";

const QUESTIONS_PER_QUIZ = 10;

function Practice() {
  const [quizQuestions, setQuizQuestions] = useState(() =>
    getRandomQuestions(QUESTIONS_PER_QUIZ)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  function handleNext(isCorrect) {
    if (isCorrect) {
      setScore((previous) => previous + 1);
    }

    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex((previous) => previous + 1);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setQuizQuestions(getRandomQuestions(QUESTIONS_PER_QUIZ));
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
  }

  const percentage = Math.round(
    (score / quizQuestions.length) * 100
  );

  return (
    <main className="page practice-page">
      <header className="page-header">
        <span className="section-eyebrow">TESTO NJOHURITE</span>
        <h1>Ushtrime praktike</h1>
        <p>
          Përgjigju pyetjeve për formulat dhe konceptet e
          trigonometrisë. Kontrollo përgjigjet dhe mëso nga shpjegimet.
        </p>
      </header>

      <section className="practice-overview">
        <article className="stat-card">
          <span className="stat-card__label">Pyetje ne dispozicion</span>
          <strong className="stat-card__value">{questions.length}</strong>
        </article>

        <article className="stat-card">
          <span className="stat-card__label">Pyetje per test</span>
          <strong className="stat-card__value">
            {Math.min(QUESTIONS_PER_QUIZ, questions.length)}
          </strong>
        </article>

        <article className="stat-card">
          <span className="stat-card__label">Kalueshmeria</span>
          <strong className="stat-card__value">80%</strong>
        </article>
      </section>

      <section className="practice-quiz">
        {!finished ? (
          <>
            <div className="practice-quiz__header">
              <div>
                <span className="section-eyebrow">TEST AKTIV</span>
                <h2>Testi yt</h2>
              </div>

              <span className="practice-quiz__score">
                Piket: {score}
              </span>
            </div>

            <ProgressBar
              value={(currentIndex / quizQuestions.length) * 100}
              label="Progresi i testit"
            />

            <QuizQuestion
              key={currentQuestion.id}
              question={{
                id: currentQuestion.id,
                prompt: currentQuestion.question,
                options: currentQuestion.options,
                correctIndex: currentQuestion.answer,
                explanation: currentQuestion.explanation
              }}
              questionNumber={currentIndex + 1}
              total={quizQuestions.length}
              onNext={handleNext}
            />
          </>
        ) : (
          <div className="quiz-results">
            <span className="section-eyebrow">TESTI PERFUNDOI</span>

            <h2>Rezultati yt</h2>

            <div className="quiz-results__percentage">
              {percentage}%
            </div>

            <p className="quiz-results__message">
              {percentage >= 80
                ? "E kalove testin. Ke arritur rezultat të mirë."
                : "Nuk e arritë pragun prej 80%. PPerserit temat dhe provo përsëri."}
            </p>

            <div className="quiz-results__stats">
              <div>
                <strong>{score}</strong>
                <span>Përgjigje të sakta</span>
              </div>

              <div>
                <strong>{quizQuestions.length - score}</strong>
                <span>Përgjigje të pasakta</span>
              </div>

              <div>
                <strong>{quizQuestions.length}</strong>
                <span>Gjithsej</span>
              </div>
            </div>

            <ProgressBar
              value={percentage}
              label="Rezultati"
            />

            <div className="quiz-results__actions">
              <button
                type="button"
                className="btn"
                onClick={restartQuiz}
              >
                Provo përsëri
              </button>

              <Link to="/lessons" className="btn btn--outline">
                Perserit mesimet
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Practice;
