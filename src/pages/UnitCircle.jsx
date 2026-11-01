import { useState } from "react";

function UnitCircle() {
  const [angle, setAngle] = useState(45);
  const [unit, setUnit] = useState("degrees");

  const radians = (angle * Math.PI) / 180;
  const normalizedAngle = ((angle % 360) + 360) % 360;

  const sin = Math.sin(radians);
  const cos = Math.cos(radians);

  const center = 200;
  const radius = 145;

  const pointX = center + radius * cos;
  const pointY = center - radius * sin;

  const angleLabel =
    unit === "degrees"
      ? `${angle}°`
      : `${Number(radians.toFixed(4))} rad`;

  const format = (number) =>
    Math.abs(number) < 1e-10 ? "0" : Number(number.toFixed(4)).toString();

  function handleAngleChange(value) {
    setAngle(Number(value));
  }

  return (
    <main className="page unit-circle-page">
      <header className="page-header">
        <span className="section-eyebrow">GJEOMETRIA TRIGONOMETRIKE</span>
        <h1>Rrethi trigonometrik</h1>
        <p>
          Ndrysho kendin dhe vezhgo pozicionin e pikes ne rreth,
          koordinatat dhe vlerat e funksioneve trigonometrike.
        </p>
      </header>

      <section className="unit-circle-layout">
        <div className="unit-circle-visual">
          <div className="unit-circle-visual__header">
            <h2>Rrethi njesi</h2>
            <span className="unit-circle-angle">{angleLabel}</span>
          </div>

          <svg
            viewBox="0 0 400 400"
            className="unit-circle-svg"
            role="img"
            aria-label={`Rrethi trigonometrik me kënd ${angle} gradë`}
          >
            <defs>
              <pattern
                id="circle-grid"
                width="36.25"
                height="36.25"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 36.25 0 L 0 0 0 36.25"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.08"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            <rect
              x="0"
              y="0"
              width="400"
              height="400"
              fill="url(#circle-grid)"
            />

            <line
              x1="25"
              y1={center}
              x2="375"
              y2={center}
              className="unit-circle-axis"
            />

            <line
              x1={center}
              y1="25"
              x2={center}
              y2="375"
              className="unit-circle-axis"
            />

            <circle
              cx={center}
              cy={center}
              r={radius}
              className="unit-circle-outline"
            />

            <path
              d={`M ${center + 45} ${center} A 45 45 0 ${normalizedAngle > 180 ? 1 : 0} 0 ${
                center + 45 * Math.cos(radians)
              } ${center - 45 * Math.sin(radians)}`}
              className="unit-circle-arc"
            />

            <line
              x1={center}
              y1={center}
              x2={pointX}
              y2={center}
              className="unit-circle-cosine"
            />

            <line
              x1={pointX}
              y1={center}
              x2={pointX}
              y2={pointY}
              className="unit-circle-sine"
            />

            <line
              x1={center}
              y1={center}
              x2={pointX}
              y2={pointY}
              className="unit-circle-radius"
            />

            <circle
              cx={pointX}
              cy={pointY}
              r="7"
              className="unit-circle-point"
            />

            <circle
              cx={center}
              cy={center}
              r="4"
              className="unit-circle-center"
            />

            <text x="380" y="220" className="unit-circle-label">x</text>
            <text x="210" y="20" className="unit-circle-label">y</text>
            <text x="210" y="220" className="unit-circle-label">O</text>
            <text x="350" y="220" className="unit-circle-label">1</text>
            <text x="210" y="45" className="unit-circle-label">1</text>

            <text
              x={Math.min(355, Math.max(45, pointX + (cos >= 0 ? 12 : -12)))}
              y={Math.min(355, Math.max(35, pointY - 12))}
              className="unit-circle-point-label"
            >
              P
            </text>
          </svg>

          <div className="unit-circle-legend">
            <span><i className="legend-dot legend-dot--radius" /> Rrezja</span>
            <span><i className="legend-dot legend-dot--cosine" /> Cosinus</span>
            <span><i className="legend-dot legend-dot--sine" /> Sinus</span>
          </div>
        </div>

        <div className="unit-circle-controls">
          <h2>Kontrollo këndin</h2>

          <div className="form-group">
            <label htmlFor="circle-angle">Këndi në grade</label>
            <div className="unit-circle-angle-input">
              <input
                id="circle-angle"
                type="number"
                min="-360"
                max="360"
                value={angle}
                onChange={(event) => {
                  const value = event.target.value;
                  if (value === "") {
                    setAngle(0);
                  } else {
                    handleAngleChange(value);
                  }
                }}
              />
              <span>°</span>
            </div>
          </div>

          <input
            className="unit-circle-slider"
            type="range"
            min="-360"
            max="360"
            step="1"
            value={angle}
            onChange={(event) => handleAngleChange(event.target.value)}
            aria-label="Ndrysho këndin"
          />

          <div className="unit-circle-presets">
            {[0, 30, 45, 60, 90, 120, 180, 270, 360].map((value) => (
              <button
                type="button"
                key={value}
                className={angle === value ? "is-active" : ""}
                onClick={() => setAngle(value)}
              >
                {value}°
              </button>
            ))}
          </div>

          <div className="unit-circle-values">
            <h3>Vlerat trigonometrike</h3>

            <div className="unit-circle-value">
              <span>cos(a)</span>
              <strong>{format(cos)}</strong>
            </div>

            <div className="unit-circle-value">
              <span>sin(a)</span>
              <strong>{format(sin)}</strong>
            </div>

            <div className="unit-circle-value">
              <span>tan(a)</span>
              <strong>
                {Math.abs(cos) < 1e-10 ? "E papërcaktuar" : format(sin / cos)}
              </strong>
            </div>

            <div className="unit-circle-value">
              <span>cot(a)</span>
              <strong>
                {Math.abs(sin) < 1e-10 ? "E papërcaktuar" : format(cos / sin)}
              </strong>
            </div>
          </div>

          <div className="unit-circle-coordinates">
            <h3>Koordinatat e pikës P</h3>
            <strong>({format(cos)}, {format(sin)})</strong>
            <p>P = (cos a, sin a)</p>
          </div>

          <div className="unit-circle-period">
            <span>Këndi i normalizuar</span>
            <strong>{normalizedAngle}°</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UnitCircle;
