import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NAVIGATION_DIRECTORY } from '../../utils/constants';

export default function Navigation() {
  return (
    <ul className="navigation">
      {NAVIGATION_DIRECTORY.map((item) => (
        <li className="navigation-link__container" key={item.link}>
          <NavLink className="navigation-link" to={item.link}>
            <FontAwesomeIcon
              className="navigation-link__icon"
              icon={item.icon}
            />
            <span className="navigation-link__text">{item.content}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
