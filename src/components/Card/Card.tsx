import React from 'react';
import CardStyles from './Card.styles';

interface DisplayProps {
  children: any;
  size?: number;
  fontsize?: number;
}

const Display: React.FC<DisplayProps> = ({
  children,
  size = 2,
  fontsize = 2,
}: DisplayProps) => {
  const CSS = CardStyles.CardCSSFactory(size, fontsize);

  return (
    <section
      style={
        {
          ...CSS.Card,
          ...CSS.container,
          ...CSS.containerVert,
        } as React.CSSProperties
      }
    >
      {children}
    </section>
  );
};

export default Display;
