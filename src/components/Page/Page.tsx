import React from 'react';
import PageStyles from './Page.styles';

interface PageProps {
  children: any;
  backgroundURL: string;
}

const Display: React.FC<PageProps> = ({
  children,
  backgroundURL,
}: PageProps) => {
  const CSS = PageStyles.PageCSSFactory(backgroundURL);

  return (
    <div
      style={
        {
          ...CSS.container,
          ...CSS.containerVert,
          ...CSS.Page,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Display;
