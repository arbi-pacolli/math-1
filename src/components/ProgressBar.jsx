// Props:
//   value (number, 0-100): progress to show; values outside the range are clamped
//   label (string, optional): text on the left, also used as the accessible name
//   showPercent (boolean, default true): shows the percentage on the right
// Usage:
//   <ProgressBar value={56} label="Equations" />
//   <ProgressBar value={0} showPercent={false} />
//   <ProgressBar value={100} />
function ProgressBar({ value = 0, label, showPercent = true }) {
  const number = Number(value);
  const safeValue = Number.isFinite(number) ? Math.min(100, Math.max(0, number)) : 0;
  const rounded = Math.round(safeValue);

  return (
    <div className="progress">
      {(label || showPercent) && (
        <div className="progress__meta">
          <span>{label}</span>
          {showPercent && <span>{rounded}%</span>}
        </div>
      )}

      <div
        className="progress__track"
        role="progressbar"
        aria-label={label || 'Progress'}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rounded}
      >
        <div className="progress__fill" style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;