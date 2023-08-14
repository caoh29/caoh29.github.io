import { ExpertiseProps } from '../../types';

import Info from '../Info';

export default function Expertise({ data }: ExpertiseProps) {
  return (
    <ul className="expertise-list">
      {data.map((item) => (
        <li key={item.info.job}>
          <div className="expertise-list-date">
            <h3>{item.info.company}</h3>
            <span className="date">{item.date}</span>
          </div>
          <div className="expertise-list-info">
            <Info text={item.info.description}>
              <h3>{item.info.job}</h3>
            </Info>
          </div>
        </li>
      ))}
    </ul>
  );
}
