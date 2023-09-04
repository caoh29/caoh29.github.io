import { SkillsProps } from '../../types';

const SCALE_LABELS = ['Beginner', 'Proficient', 'Expert', 'Master'];

export default function Skills({ data }: { data: SkillsProps[] }) {
  return (
    <>
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
    </>
  );
}
