import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NAVIGATION_DIRECTORY } from '../../utils/constants';

export default function Navigation() {
  return (
    <div className="navigation">
      {NAVIGATION_DIRECTORY.map((item) => (
        <div className="navigation-link-container" key={item.link}>
          <NavLink className="navigation-link" to={item.link}>
            <FontAwesomeIcon
              className="navigation-link-icon"
              icon={item.icon}
            />
            <span className="navigation-link-text">{item.content}</span>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
