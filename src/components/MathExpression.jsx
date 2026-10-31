import { useEffect, useRef } from 'react';

// Renders LaTeX with MathJax 3 (loaded in index.html).
// Uses the $ and $$ delimiters from the index.html setup.
// Props:
//   latex   (string, required): the formula
//   display (boolean, default false): true = display formula, false = inline
// Usage:
//   <MathExpression latex="\sin(\alpha+\beta)" />
//   <MathExpression latex="\frac{\sqrt{6}+\sqrt{2}}{4}" display />
function MathExpression({ latex, display = false }) {
  const ref = useRef(null);
  const Tag = display ? 'div' : 'span';

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let cancelled = false;

    async function render() {
      // MathJax loads asynchronously, so wait for it (up to 5 seconds)
      let attempts = 0;
      while (!window.MathJax?.typesetPromise && attempts < 100) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        attempts += 1;
      }
      if (cancelled) return;

      if (!window.MathJax?.typesetPromise) {
        el.textContent = latex; // fallback: show the raw LaTeX
        return;
      }

      await window.MathJax.startup?.promise;
      if (cancelled) return;

      // Remove the previous formula, then typeset the new one
      window.MathJax.typesetClear?.([el]);
      el.textContent = display ? '$$' + latex + '$$' : '$' + latex + '$';
      await window.MathJax.typesetPromise([el]);
    }

    render().catch(() => {
      el.textContent = latex;
    });

    return () => {
      cancelled = true;
    };
  }, [latex, display]);

  return <Tag ref={ref} className={display ? 'math-display' : 'math-inline'} />;
}

export default MathExpression;