import { useEffect, useState } from 'react';
import MathExpression from './MathExpression';

// Props:
//   question (object):
//     id: string or number
//     prompt: LaTeX string
//     options: array of LaTeX strings
//     correctIndex: position of the correct option, starting at 0
//     explanation: plain text shown after answering
//   questionNumber (number): position of this question, e.g. 4
//   total (number): number of questions, e.g. 10
//   onNext (function): called with true or false (was the answer correct) when Next is pressed
// Usage (cos 15° from the lecture's exercises):
//   <QuizQuestion
//     question={{
//       id: 'cos15',
//       prompt: '\\cos 15^\\circ = ?',
//       options: [
//         '\\frac{\\sqrt{6}+\\sqrt{2}}{4}',
//         '\\frac{\\sqrt{6}-\\sqrt{2}}{4}',
//         '\\frac{\\sqrt{3}}{2}',
//         '\\frac{\\sqrt{2}}{2}',
//       ],
//       correctIndex: 0,
//       explanation: 'cos 15° = cos(45° − 30°) = (√6 + √2)/4',
//     }}
//     questionNumber={4}
//     total={10}
//     onNext={(isCorrect) => console.log(isCorrect)}
//   />
function QuizQuestion({ question, questionNumber, total, onNext }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Start fresh whenever a new question is shown
  useEffect(() => {
    setSelected(null);
    setSubmitted(false);
  }, [question.id]);

  const isCorrect = selected === question.correctIndex;
  const groupName = `quiz-${question.id}`;

  return (
    <section className="quiz">
      <p className="quiz__counter">
        Question {questionNumber} / {total}
      </p>

      <div className="quiz__prompt">
        <MathExpression latex={question.prompt} display />
      </div>

      <fieldset className="quiz__fieldset" disabled={submitted}>
        <legend className="quiz__legend">Choose one answer</legend>

        {question.options.map((option, index) => {
          let className = 'quiz__option';
          if (submitted && index === question.correctIndex) {
            className += ' quiz__option--correct';
          } else if (submitted && index === selected) {
            className += ' quiz__option--wrong';
          }

          return (
            <label key={index} className={className}>
              <input
                type="radio"
                name={groupName}
                value={index}
                checked={selected === index}
                onChange={() => setSelected(index)}
              />
              <MathExpression latex={option} />
            </label>
          );
        })}
      </fieldset>

      {submitted && (
        <div className="quiz__feedback" role="status">
          <p className={isCorrect ? 'quiz__result quiz__result--correct' : 'quiz__result quiz__result--wrong'}>
            {isCorrect ? 'Correct!' : 'Not quite.'}
          </p>
          <p className="quiz__explanation">{question.explanation}</p>
        </div>
      )}

      <div className="quiz__actions">
        {submitted ? (
          <button type="button" className="btn" onClick={() => onNext(isCorrect)}>
            Next
          </button>
        ) : (
          <button
            type="button"
            className="btn"
            disabled={selected === null}
            onClick={() => setSubmitted(true)}
          >
            Check answer
          </button>
        )}
      </div>
    </section>
  );
}

export default QuizQuestion;