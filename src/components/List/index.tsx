import { ReactNode } from 'react';
import { HeadingContext } from '../../contexts/headingContext';
import { HeadingColorContext } from '../../contexts/HeadingColorContext';

interface ListProps {
  children: ReactNode;
  level: number;
  color: string;
}

function List({ children, level, color }: ListProps) {
  return (
    <div>
      <HeadingContext.Provider value={level}>
        <HeadingColorContext.Provider value={color}>
          {children}
        </HeadingColorContext.Provider>
      </HeadingContext.Provider>
    </div>
  );
}

export { List };
