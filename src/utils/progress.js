// Saves student progress in localStorage. No backend.
// Stored shape:
// {
//   lessons: { 'addition-formulas': 40 },   // percent per lesson id
//   quizzes: { 'addition-formulas': { best: 8, total: 10, attempts: 2 } }
// }
// If storage is blocked, every function falls back to empty progress.

const STORAGE_KEY = 'math1-progress';

function emptyProgress() {
  return { lessons: {}, quizzes: {} };
}

function clampPercent(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(100, Math.max(0, Math.round(n))) : 0;
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw);
    return {
      lessons: parsed.lessons ?? {},
      quizzes: parsed.quizzes ?? {},
    };
  } catch {
    return emptyProgress();
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage is full or blocked: progress lasts only for this visit
  }
}

// Sets a lesson's progress (0-100) and returns the updated progress
export function setLessonProgress(lessonId, percent) {
  const progress = loadProgress();
  progress.lessons[lessonId] = clampPercent(percent);
  saveProgress(progress);
  return progress;
}

// Lesson progress (0-100); 0 if the lesson hasn't been started
export function getLessonProgress(lessonId) {
  return loadProgress().lessons[lessonId] ?? 0;
}

// Status for LessonCard: 'not-started' | 'in-progress' | 'completed'
export function getLessonStatus(lessonId) {
  const percent = getLessonProgress(lessonId);
  if (percent >= 100) return 'completed';
  if (percent > 0) return 'in-progress';
  return 'not-started';
}

// Records a quiz result and keeps the best score
export function saveQuizResult(quizId, score, total) {
  const progress = loadProgress();
  const previous = progress.quizzes[quizId];
  progress.quizzes[quizId] = {
    best: Math.max(previous?.best ?? 0, score),
    total,
    attempts: (previous?.attempts ?? 0) + 1,
  };
  saveProgress(progress);
  return progress.quizzes[quizId];
}

// Best quiz result, or null if the quiz hasn't been taken
export function getQuizResult(quizId) {
  return loadProgress().quizzes[quizId] ?? null;
}

// Average lesson progress (0-100) across the given lesson ids
export function getOverallProgress(lessonIds) {
  if (lessonIds.length === 0) return 0;
  const { lessons } = loadProgress();
  const sum = lessonIds.reduce((total, id) => total + (lessons[id] ?? 0), 0);
  return Math.round(sum / lessonIds.length);
}

// Deletes all saved progress (for a "Reset progress" button)
export function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to reset if storage is blocked
  }
}