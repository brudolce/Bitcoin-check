import React from 'react';
import DisplayStyles from './Display.styles';

interface DisplayProps {
  children: any;

  vert?: boolean;
}

const Display: React.FC<DisplayProps> = ({
  children,

  vert = false,
}: DisplayProps) => {
  const CSS = DisplayStyles.DisplayCSSFactory();
  const baseCSS = { ...CSS.Display, ...CSS.container };

  return (
    <section
      style={
        vert
          ? ({ ...baseCSS, ...CSS.containerVert } as React.CSSProperties)
          : (baseCSS as React.CSSProperties)
      }
    >
      {children}
    </section>
  );
};

export default Display;
