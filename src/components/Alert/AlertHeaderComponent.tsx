import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface IAlertHeaderProps {
  children?: ReactNode;
  as?: string;
  customStyles?: Record<string, string>;
  className?: string;
  id?: string;
}

const AlertHeaderBase: React.FC<IAlertHeaderProps> = ({ children, as = 'h4', className, id }: IAlertHeaderProps) => {
  // user can pass in custom tag they want to use for the header element
  // overwise the default h4 is used
  const HeaderTag = as as keyof JSX.IntrinsicElements; // defines custom HeaderTag as a jsx element
  // have to add classname here for styledcomponent to add the default and custom styles to the component
  return (
    <HeaderTag className={className} id={id}>
      {children}
    </HeaderTag>
  );
};

export const AlertHeader = styled(AlertHeaderBase)(({ customStyles }) => {
  const defaultStyles = {
    margin: 0,
  };
  return { ...defaultStyles, ...customStyles };
});
