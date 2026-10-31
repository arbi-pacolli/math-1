// Pure trigonometry helpers. No React, no DOM.
// Angles are in degrees unless a function says otherwise.

const EPS = 1e-9;

export function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

// Brings any angle into [0, 360)
function normalizeDegrees(degrees) {
  const r = degrees % 360;
  return r < 0 ? r + 360 : r;
}

// Removes floating-point noise, e.g. sin(180°) = 1.2e-16 becomes 0
function clean(x) {
  return Math.abs(x) < 1e-12 ? 0 : x;
}

export function sinDeg(degrees) {
  return clean(Math.sin(toRadians(degrees)));
}

export function cosDeg(degrees) {
  return clean(Math.cos(toRadians(degrees)));
}

// null where tan is undefined (90°, 270°, and every 180° after that)
export function tanDeg(degrees) {
  const m = normalizeDegrees(degrees) % 180;
  if (Math.abs(m - 90) < EPS) return null;
  if (m < EPS || 180 - m < EPS) return 0;
  return Math.tan(toRadians(degrees));
}

// null where cot is undefined (0°, 180°, and every 180° after that)
export function cotDeg(degrees) {
  const s = sinDeg(degrees);
  if (s === 0) return null;
  return cosDeg(degrees) / s;
}

// Evaluates sin, cos, tan or cot. Returns null where the value is undefined.
// unit: 'deg' (default) or 'rad'
export function trigValue(fn, angle, unit = 'deg') {
  const degrees = unit === 'rad' ? toDegrees(angle) : angle;
  switch (fn) {
    case 'sin':
      return sinDeg(degrees);
    case 'cos':
      return cosDeg(degrees);
    case 'tan':
      return tanDeg(degrees);
    case 'cot':
      return cotDeg(degrees);
    default:
      throw new Error(`Unknown trig function: ${fn}`);
  }
}

// Exact values for the reference angles 0°, 15°, 30°, 45°, 60°, 75°, 90°
const EXACT = {
  sin: { 0: '0', 15: '(√6-√2)/4', 30: '1/2', 45: '√2/2', 60: '√3/2', 75: '(√6+√2)/4', 90: '1' },
  cos: { 0: '1', 15: '(√6+√2)/4', 30: '√3/2', 45: '√2/2', 60: '1/2', 75: '(√6-√2)/4', 90: '0' },
  tan: { 0: '0', 15: '2-√3', 30: '√3/3', 45: '1', 60: '√3', 75: '2+√3', 90: 'undefined' },
  cot: { 0: 'undefined', 15: '2+√3', 30: '√3', 45: '1', 60: '√3/3', 75: '2-√3', 90: '0' },
};

// Sign of each function in each quadrant (1 to 4)
const SIGNS = {
  sin: { 1: 1, 2: 1, 3: -1, 4: -1 },
  cos: { 1: 1, 2: -1, 3: -1, 4: 1 },
  tan: { 1: 1, 2: -1, 3: 1, 4: -1 },
  cot: { 1: 1, 2: -1, 3: 1, 4: -1 },
};

function applySign(text, sign) {
  if (sign > 0 || text === '0') return text;
  // Wrap sums and differences in brackets, e.g. -(2-√3)
  const needsBrackets = !text.startsWith('(') && /[+-]/.test(text);
  return needsBrackets ? `-(${text})` : `-${text}`;
}

// Exact form of sin, cos, tan or cot for angles that are multiples of 15°.
// exactValue('sin', 45) -> "√2/2"    exactValue('cos', 135) -> "-√2/2"
// Returns null if the angle has no exact form in the table or the value is undefined.
// unit: 'deg' (default) or 'rad'
export function exactValue(fn, angle, unit = 'deg') {
  const table = EXACT[fn];
  if (!table) return null;

  const degrees = unit === 'rad' ? toDegrees(angle) : angle;
  if (!Number.isFinite(degrees)) return null;

  // Reduce the angle to the first quadrant: a reference angle plus a sign
  const n = normalizeDegrees(degrees);
  let quadrant;
  let reference;
  if (n <= 90) {
    quadrant = 1;
    reference = n;
  } else if (n <= 180) {
    quadrant = 2;
    reference = 180 - n;
  } else if (n <= 270) {
    quadrant = 3;
    reference = n - 180;
  } else {
    quadrant = 4;
    reference = 360 - n;
  }

  const key = Object.keys(table).find((k) => Math.abs(Number(k) - reference) < EPS);
  if (key === undefined) return null;

  const text = table[key];
  if (text === 'undefined') return null;
  return applySign(text, SIGNS[fn][quadrant]);
}

// Display helper: rounds to `digits` decimals and drops trailing zeros.
// null (an undefined value) becomes "undefined".
export function formatValue(value, digits = 9) {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'undefined';
  return String(Number(value.toFixed(digits)));
}