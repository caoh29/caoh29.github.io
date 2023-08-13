import { NavLink } from 'react-router-dom';

import { NAVIGATION_DIRECTORY } from '../../utils/constants';

export default function Navigation() {
  return (
    <>
      {NAVIGATION_DIRECTORY.map((item) => (
        <NavLink className="navigation-link" key={item.link} to={item.link}>
          {item.content}
        </NavLink>
      ))}
    </>
  );
}
