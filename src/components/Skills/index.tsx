import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

import { SkillsProps } from '../../types';

const SCALE_LABELS = ['Beginner', 'Proficient', 'Expert', 'Master'];

export default function Skills({ data }: { data: SkillsProps[] }) {
  const isLoading = useSelector(
    (state: RootState) => state.skillsReducer.isLoading
  );
  const error = useSelector((state: RootState) => state.skillsReducer.error);
  return (
    <>
      {isLoading && (
        <div className="skills-spinner-container">
          <div className="skills-spinner">
            <FontAwesomeIcon icon={faRefresh} />
          </div>
        </div>
      )}
      {error === null && !isLoading && (
        <div className="skills">
          <ul className="skills-list">
            {data.map((skill) => (
              <li key={skill.name} className="skill">
                <div className="skill-bar" style={{ width: `${skill.range}%` }}>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="scale-bar">
            {SCALE_LABELS.map((label) => (
              <div key={label} className="scale-label">
                {label}
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <p className="skills-error">{error}</p>}
    </>
  );
}
