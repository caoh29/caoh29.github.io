import { TimeLineProps } from '../../types';

import Info from '../Info';

export default function TimeLine({ data }: TimeLineProps) {
  return (
    <div className="timeline">
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
    </div>
  );
}
