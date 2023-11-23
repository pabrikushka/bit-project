import * as React from 'react';
import { Link } from 'react-scroll';
import { yearToShortYear } from './helpers';
import { IHistoryGroup } from './types';
import { useCallback } from 'react';

interface HistoryYearNavigationProps {
  historyGroups: IHistoryGroup[];
}

const HistoryYearNavigation = (props: HistoryYearNavigationProps) => {
  const { historyGroups } = props;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const dotTopValue = currentIndex * 2 + 1;

  // React.useEffect(() => {
  //   if(dataForHistory?.length){
  //       animateScroll.scrollTo(dataForHistory[0].id)
  //   }
  // }, [dataForHistory]);

  const handleSetActive = useCallback(
    (to: string, element: HTMLElement) => {
      const foundIndex = historyGroups.findIndex((q) => q.id.toString() === to);
      if (foundIndex !== undefined) {
        setCurrentIndex(foundIndex);
      }
    },
    [historyGroups]
  );

  return (
    <nav className='history-nav pt-3'>
      <div className='history-nav-content py-4 py-md-5 mt-xl-5'>
        <div className='history-nav-items ps-3 ps-md-5 pe-md-3'>
          <div
            className='history-nav-dot d-none d-md-block'
            style={{
              top: `${dotTopValue}rem`,
            }}></div>
          {historyGroups.map((data: IHistoryGroup, index: number) => (
            <li className='history-nav-item' key={`link${index}`}>
              <Link
                className='nav-link small history-nav-link font-aeonik'
                activeClass='active'
                to={data.id.toString()}
                spy={true}
                delay={50}
                smooth={false}
                onSetActive={handleSetActive}>
                {yearToShortYear(data.year)}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HistoryYearNavigation;
