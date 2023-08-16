import { useEffect, useRef } from 'react';

import Isotope from 'isotope-layout';

import PortfolioInfo from '../PortfolioInfo';

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
        <li onClick={() => handleFilter('*')}>All</li>
        <li onClick={() => handleFilter('.ui')}>UI</li>
        <li onClick={() => handleFilter('.code')}>Code</li>
      </ul>
      <ul className="filter-container" ref={containerRef}>
        <li className="filter-item ui">
          <img src="" alt="" />
          <PortfolioInfo title={'UI'} text={'UI'} url={''} />
        </li>
        <li className="filter-item ui code">
          <img src="" alt="" />
          <PortfolioInfo title={'UI + CODE'} text={'UI + CODE'} url={''} />
        </li>
        <li className="filter-item code">
          <img src="" alt="" />
          <PortfolioInfo title={'CODE'} text={'CODE'} url={''} />
        </li>
      </ul>
    </div>
  );
}
