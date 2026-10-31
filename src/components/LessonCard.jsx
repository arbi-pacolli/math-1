import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const STATUS_LABELS = {
  'not-started': 'Not started',
  'in-progress': 'In progress',
  completed: 'Completed',
};

// Props:
//   number (number): lesson number, e.g. 3
//   title (string): lesson title, in Albanian
//   status ('not-started' | 'in-progress' | 'completed')
//   progress (number, 0-100): shown as a progress bar
//   to (string): route to open, e.g. '/lessons/addition-formulas'
// Usage:
//   <LessonCard number={3} title="Formulat e adicionit" status="in-progress" progress={40} to="/lessons/addition-formulas" />
function LessonCard({ number, title, status = 'not-started', progress = 0, to }) {
  const safeStatus = STATUS_LABELS[status] ? status : 'not-started';

  return (
    <Link to={to} className="lesson-card">
      <div className="lesson-card__header">
        <span>Lesson {number}</span>
        <span className={`status-badge status-badge--${safeStatus}`}>
          {STATUS_LABELS[safeStatus]}
        </span>
      </div>

      <h3 className="lesson-card__title">{title}</h3>

      <ProgressBar value={progress} label="Progress" />
    </Link>
  );
}

export default LessonCard;