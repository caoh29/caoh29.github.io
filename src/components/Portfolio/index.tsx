import { useEffect, useRef } from 'react';

import Isotope from 'isotope-layout';

import PortfolioInfo from '../PortfolioInfo';

import { handleTabsColorChange } from '../../utils/helpers';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
} from '../../utils/constants';

export default function Portfolio() {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const isotope = useRef<Isotope | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      isotope.current = new Isotope(containerRef.current, {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      });
    }
    return () => {
      if (isotope) isotope.current?.destroy();
    };
  }, []);

  const handleFilter = (filterValue: string) => {
    if (isotope) isotope.current?.arrange({ filter: filterValue });
  };

  return (
    <div className="portfolio">
      <ul className="tabs">
        {PORTFOLIO_CATEGORIES.map((category) => (
          <li
            key={category.selector}
            onClick={(e) => {
              handleFilter(category.selector);
              handleTabsColorChange(e);
            }}
          >
            {category.value}
          </li>
        ))}
      </ul>
      <ul className="filter-container" ref={containerRef}>
        {PORTFOLIO_PROJECTS.map((project) => (
          <li className={`filter-item ${project.className}`} key={project.name}>
            <img src={project.image} alt={project.name} />
            <PortfolioInfo
              title={project.name}
              text={project.description}
              url={project.projectUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
