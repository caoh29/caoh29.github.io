import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

import { TimeLineProps } from '../../types';

import Info from '../Info';

export default function TimeLine({ data }: { data: TimeLineProps[] }) {
  const isLoading = useSelector(
    (state: RootState) => state.educationReducer.isLoading
  );
  const error = useSelector((state: RootState) => state.educationReducer.error);
  return (
    <div className="timeline">
      {isLoading && (
        <div className="timeline-spinner">
          <FontAwesomeIcon icon={faRefresh} />
        </div>
      )}
      {error === null && !isLoading && (
        <ul className="timeline-list">
          {data.map((item) => (
            <li key={item.title}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-event">
                <Info text={item.text}>
                  <h3>{item.title}</h3>
                </Info>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="timeline-error">{error}</p>}
    </div>
  );
}
