import { PropsWithChildren, useContext } from 'react';
import { HeadingContext } from '../../contexts/headingContext';
import { HeadingColorContext } from '../../contexts/HeadingColorContext';

interface ListItemProps extends PropsWithChildren {}

function ListItem({ children }: ListItemProps) {
  const level = useContext(HeadingContext);
  const color = useContext(HeadingColorContext);

  switch (level) {
    case 1: {
      return <h1 style={{ color }}>{children}</h1>;
    }
    case 2: {
      return <h2 style={{ color }}>{children}</h2>;
    }
    case 3: {
      return <h3 style={{ color }}>{children}</h3>;
    }
    case 4: {
      return <h4 style={{ color }}>{children}</h4>;
    }
    case 5: {
      return <h5 style={{ color }}>{children}</h5>;
    }
  }
}

export { ListItem };
