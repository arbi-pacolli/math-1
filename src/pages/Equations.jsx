import { useState } from "react";
import MathExpression from "../components/MathExpression";

function normalizeAngle(angle) {
  const fullTurn = 2 * Math.PI;
  return ((angle % fullTurn) + fullTurn) % fullTurn;
}

function formatNumber(value) {
  if (Math.abs(value) < 1e-10) return "0";
  return Number(value.toFixed(6)).toString();
}

function Equations() {
  const [type, setType] = useState("sin");
  const [value, setValue] = useState("0.5");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  function solveEquation() {
    const number = Number(value);

    if (value.trim() === "" || !Number.isFinite(number)) {
      setError("Shkruaj nje vlere numerike te vlefshme.");
      setResults(null);
      return;
    }

    if ((type === "sin" || type === "cos") &&
        (number < -1 || number > 1)) {
      setError("Per sin dhe cos, vlera duhet te jete ndermjet -1 dhe 1.");
      setResults(null);
      return;
    }

    let solutions = [];
    let general = "";

    if (type === "sin") {
      const alpha = Math.asin(number);
      const first = normalizeAngle(alpha);
      const second = normalizeAngle(Math.PI - alpha);

      general = "x = a + 2kp ose x = p - a + 2kp";
      solutions = [
        { label: "Zgjidhja e pare", radians: first },
        { label: "Zgjidhja e dyte", radians: second }
      ];
    }

    if (type === "cos") {
      const alpha = Math.acos(number);
      const first = normalizeAngle(alpha);
      const second = normalizeAngle(-alpha);

      general = "x = ea + 2kp";
      solutions = [
        { label: "Zgjidhja e pare", radians: first },
        { label: "Zgjidhja e dyte", radians: second }
      ];
    }

    if (type === "tan") {
      const alpha = Math.atan(number);
      const first = normalizeAngle(alpha);

      general = "x = a + kp";
      solutions = [
        { label: "Zgjidhja ne [0, 2p)", radians: first },
        { label: "Zgjidhja tjeter", radians: normalizeAngle(first + Math.PI) }
      ];
    }

    if (type === "cot") {
      if (number === 0) {
        general = "x = p/2 + kp";
        solutions = [
          { label: "Zgjidhja e pare", radians: Math.PI / 2 },
          { label: "Zgjidhja e dyte", radians: (3 * Math.PI) / 2 }
        ];
      } else {
        const alpha = Math.atan(1 / number);
        const first = normalizeAngle(alpha);

        general = "x = a + kp";
        solutions = [
          { label: "Zgjidhja e pare", radians: first },
          { label: "Zgjidhja e dyte", radians: normalizeAngle(first + Math.PI) }
        ];
      }
    }

    setResults({
      equation: `${type}(x) = ${number}`,
      general,
      solutions: solutions.map((solution) => ({
        ...solution,
        degrees: (solution.radians * 180) / Math.PI
      }))
    });

    setError("");
  }

  return (
    <main className="page equations-page">
      <header className="page-header">
        <span className="section-eyebrow">ZGJIDHJA E EKUACIONEVE</span>
        <h1>Ekuacionet trigonometrike</h1>
        <p>
          Zgjidh ekuacione baze trigonometrike dhe shiko zgjidhjet
          ne intervalin [0, 2p), si dhe formen e pergjithshme.
        </p>
      </header>

      <section className="equations-layout">
        <div className="equations-panel">
          <h2>Vendos ekuacionin</h2>

          <div className="form-group">
            <label htmlFor="function-type">Funksioni</label>
            <select
              id="function-type"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
                setResults(null);
                setError("");
              }}
            >
              <option value="sin">sin(x) = a</option>
              <option value="cos">cos(x) = b</option>
              <option value="tan">tan(x) = c</option>
              <option value="cot">cot(x) = d</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="equation-value">Vlera</label>
            <input
              id="equation-value"
              type="number"
              step="any"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Shkruaj vleren"
            />
          </div>

          <button
            type="button"
            className="btn"
            onClick={solveEquation}
          >
            Zgjidh ekuacionin
          </button>

          {error && <p className="form-error">{error}</p>}
        </div>

        <div className="equations-results">
          <span className="section-eyebrow">ZGJIDHJET</span>
          <h2>Rezultati</h2>

          {results ? (
            <>
              <div className="equation-display">
                <MathExpression
                  latex={`${results.equation.replace("sin", "\\sin").replace("cos", "\\cos").replace("tan", "\\tan").replace("cot", "\\cot")}`}
                  display
                />
              </div>

              <div className="equation-general">
                <h3>Zgjidhja e pergjithshme</h3>
                <p>{results.general}</p>
                <p>
                  <strong>k</strong> ? Z
                </p>
              </div>

              <div className="equation-solutions">
                <h3>Zgjidhjet ne intervalin [0, 2p)</h3>

                {results.solutions.map((solution, index) => (
                  <article className="equation-solution-card" key={index}>
                    <span>{solution.label}</span>
                    <strong>
                      {formatNumber(solution.radians)} rad
                    </strong>
                    <span>
                      {formatNumber(solution.degrees)}
                    </span>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="calculator-empty">
              <p>Vendos funksionin dhe vleren per te par zgjidhjet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Equations;
