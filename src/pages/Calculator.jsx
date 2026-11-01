import { useState } from "react";

function Calculator() {
  const [angle, setAngle] = useState("45");
  const [unit, setUnit] = useState("degrees");
  const [precision, setPrecision] = useState("6");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  function calculate() {
    const value = Number(angle);

    if (angle.trim() === "" || !Number.isFinite(value)) {
      setError("Shkruaj nje kend te vlefshem.");
      setResults(null);
      return;
    }

    const radians =
      unit === "degrees" ? (value * Math.PI) / 180 : value;

    const sin = Math.sin(radians);
    const cos = Math.cos(radians);

    const isZero = (number) => Math.abs(number) < 1e-12;

    const format = (number) => {
      if (number === null) return "E papercaktuar";
      if (Math.abs(number) < 1e-12) return "0";

      return Number(number.toFixed(Number(precision))).toString();
    };

    setResults([
      { name: "sin", expression: "sin(a)", value: format(sin) },
      { name: "cos", expression: "cos(a)", value: format(cos) },
      {
        name: "tan",
        expression: "tan(a)",
        value: isZero(cos) ? "E papercaktuar" : format(sin / cos)
      },
      {
        name: "cot",
        expression: "cot(a)",
        value: isZero(sin) ? "E papercaktuar" : format(cos / sin)
      }
    ]);

    setError("");
  }

  return (
    <main className="page calculator-page">
      <header className="page-header">
        <span className="section-eyebrow">MJET MATEMATIKOR</span>
        <h1>Kalkulatori trigonometrik</h1>
        <p>
          Llogarit vlerat e funksioneve trigonometrike për çdo kënd
          në gradë ose radian.
        </p>
      </header>

      <section className="calculator-layout">
        <div className="calculator-panel">
          <h2>Vendos kendin</h2>

          <div className="form-group">
            <label htmlFor="angle">Kendi (a)</label>
            <input
              id="angle"
              type="number"
              step="any"
              value={angle}
              onChange={(event) => setAngle(event.target.value)}
              placeholder="p.sh. 45"
            />
          </div>

          <div className="form-group">
            <label htmlFor="angle-unit">Njesia matese</label>
            <select
              id="angle-unit"
              value={unit}
              onChange={(event) => setUnit(event.target.value)}
            >
              <option value="degrees">Grade (e)</option>
              <option value="radians">Radiane (rad)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="precision">Numri i shifrave dhjetore</label>
            <select
              id="precision"
              value={precision}
              onChange={(event) => setPrecision(event.target.value)}
            >
              <option value="2">2 shifra</option>
              <option value="4">4 shifra</option>
              <option value="6">6 shifra</option>
              <option value="10">10 shifra</option>
            </select>
          </div>

          <button
            type="button"
            className="btn calculator-submit"
            onClick={calculate}
          >
            Llogarit
          </button>

          {error && <p className="form-error">{error}</p>}
        </div>

        <div className="calculator-results">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">REZULTATET</span>
              <h2>Funksionet trigonometrike</h2>
            </div>
          </div>

          {results ? (
            <div className="calculator-result-grid">
              {results.map((result) => (
                <article className="calculator-result-card" key={result.name}>
                  <span>{result.expression}</span>
                  <strong>{result.value}</strong>
                </article>
              ))}
            </div>
          ) : (
            <div className="calculator-empty">
              <p>Vendos nje kend dhe shtyp "Llogarit" per te pare rezultatet.</p>
            </div>
          )}

          <div className="calculator-note">
            <strong>Verejtje matematikore</strong>
            <p>
              Tangjenta nuk eshte e percaktuar kur cos(a) = 0.
              Kotangjenta nuk eshte e percaktuar kur sin(a) = 0.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Calculator;
