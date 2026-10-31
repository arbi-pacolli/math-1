// Solves basic trigonometric equations: sin x = a, cos x = b, tan x = c, cot x = d.
// Pure functions, no React. Angles are in degrees.
import { toDegrees } from './trigonometry';

const EPS = 1e-9;

// Keeps one copy of each value (values closer than EPS count as equal)
function unique(values) {
  const result = [];
  for (const value of values) {
    if (!result.some((item) => Math.abs(item - value) < EPS)) result.push(value);
  }
  return result;
}

// Brings an angle into [0, period)
function normalize(degrees, period) {
  const r = ((degrees % period) + period) % period;
  return Math.abs(r - period) < EPS ? 0 : r;
}

// Rounds to 9 decimals so 29.999999999999996 shows as 30
function round(value) {
  return Math.round(value * 1e9) / 1e9;
}

// Solves fn(x) = value for x in [from, to], in degrees.
// fn: 'sin' | 'cos' | 'tan' | 'cot'
// Returns a sorted array, e.g. solveTrig('sin', 0.5) -> [30, 150].
// Returns [] when there is no solution, e.g. sin x = 2.
export function solveTrig(fn, value, from = 0, to = 360) {
  const a = Number(value);
  if (!Number.isFinite(a)) return [];

  const lo = Math.min(from, to);
  const hi = Math.max(from, to);

  let period;
  let bases;

  switch (fn) {
    case 'sin': {
      if (a < -1 || a > 1) return [];
      const x = toDegrees(Math.asin(a)); // between -90 and 90
      period = 360;
      bases = [x, 180 - x];
      break;
    }
    case 'cos': {
      if (a < -1 || a > 1) return [];
      const x = toDegrees(Math.acos(a)); // between 0 and 180
      period = 360;
      bases = [x, -x];
      break;
    }
    case 'tan': {
      period = 180;
      bases = [toDegrees(Math.atan(a))];
      break;
    }
    case 'cot': {
      period = 180;
      bases = [90 - toDegrees(Math.atan(a))];
      break;
    }
    default:
      throw new Error(`Unknown function: ${fn}`);
  }

  const solutions = [];
  for (const start of unique(bases.map((b) => normalize(b, period)))) {
    // Every solution has the form start + k * period, for a whole number k
    const kMin = Math.ceil((lo - start) / period - EPS);
    const kMax = Math.floor((hi - start) / period + EPS);
    for (let k = kMin; k <= kMax; k += 1) {
      solutions.push(round(start + k * period));
    }
  }

  return unique(solutions).sort((x, y) => x - y);
}