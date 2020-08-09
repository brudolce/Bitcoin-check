import React from 'react';
import DisplayStyles from './Display.styles';

interface DisplayProps {
  children: any;
  height: number;
  fontsize: number;
  vert?: boolean;
}

const Display: React.FC<DisplayProps> = ({
  children,
  height = 100,
  fontsize = 4,
  vert,
}: DisplayProps) => {
  const CSS = DisplayStyles.DisplayCSSFactory(height, fontsize);
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
