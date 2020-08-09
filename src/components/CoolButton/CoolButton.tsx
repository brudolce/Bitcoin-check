import React from 'react';
import CoolButtonStyles from './CoolButton.styles';

interface CoolButtonProps {
  children: any;
  onClick: () => void;
  size: number;
}

const CoolButton: React.FC<CoolButtonProps> = ({
  children = 'button',
  onClick,
  size = 2,
}: CoolButtonProps) => {
  const CSS = CoolButtonStyles.CoolButtonCSSFactory(size);

  return (
    <>
      <button
        style={{ ...CSS.CoolButton, ...CSS.container } as React.CSSProperties}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default CoolButton;
