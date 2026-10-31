import { useState } from 'react';
import MathExpression from './MathExpression';

// Props:
//   title (string): card heading, e.g. "Formula e sinusit"
//   latex (string): the formula as LaTeX
//   description (string, optional): short text under the formula
//   children (optional): interactive example, shown when "Show example" is pressed
// Usage:
//   <FormulaCard
//     title="Formula e sinusit"
//     latex="\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta"
//     description="Sinusi i shumës së dy këndeve."
//   />
function FormulaCard({ title, latex, description, children }) {
  const [showExample, setShowExample] = useState(false);
  const hasExample = Boolean(children);

  return (
    <article className="formula-card">
      <h3 className="formula-card__title">{title}</h3>

      <div className="formula-card__formula">
        <MathExpression latex={latex} display />
      </div>

      {description && <p className="formula-card__description">{description}</p>}

      {hasExample && (
        <>
          <button
            type="button"
            className="btn btn--outline"
            aria-expanded={showExample}
            onClick={() => setShowExample((open) => !open)}
          >
            {showExample ? 'Hide example' : 'Show example'}
          </button>

          {showExample && <div className="formula-card__example">{children}</div>}
        </>
      )}
    </article>
  );
}

export default FormulaCard;