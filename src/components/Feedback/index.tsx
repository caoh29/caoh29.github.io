import { FeedbackProps } from '../../types';
import Info from '../Info';

export default function Feedback({ data }: FeedbackProps) {
  return (
    <ul className="feedback">
      {data.map((comment) => (
        <li key={comment.reporter.citeUrl}>
          <blockquote>
            <Info text={comment.feedback} />
            <div className="feedback-reporter">
              <img
                className="feedback-reporter-photo"
                src={comment.reporter.photoUrl}
                alt={comment.reporter.name}
              />
              <cite>
                {`${comment.reporter.name}, `}
                <a href={comment.reporter.citeUrl}>
                  {comment.reporter.citeUrl}
                </a>
              </cite>
            </div>
          </blockquote>
        </li>
      ))}
    </ul>
  );
}
