import React from 'react';
import styled from 'styled-components';
import { secondary } from '../statusColors';

// need to extend html attributes so onclick will not cause a typescript error
interface ICloseIconProps extends React.HTMLAttributes<HTMLElement> {
  hidden: boolean;
  fill: string;
  closeLabel?: string;
  onClick?: () => void;
}

const CloseIconButton = styled.button<ICloseIconProps>`
  display: ${({ hidden }) => (hidden ? 'none' : 'visible')};
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  & svg {
    fill: ${({ fill }) => fill};
    fill-opacity: 0.7;
    height: 1.2rem;
    width: 1.2rem;
  }
  &:hover {
    & svg {
      fill-opacity: 1;
      & path {
        stroke-width: 1px;
        stroke: ${({ fill }) => fill};
      }
    }
  }
`;

const CloseIcon: React.FC<ICloseIconProps> = ({
  hidden = false,
  fill = secondary.color,
  closeLabel,
  onClick,
}: ICloseIconProps) => {
  // if there are multiple instances of the close button on screen, each will have it's own unique label and grab the correct text
  const arialLabel = closeLabel
    ? `${closeLabel.replace(/\s+/g, '')}-button-label`
    : `${Math.floor(Math.random() * Math.floor(100))}-button-label`;
  return (
    <CloseIconButton hidden={hidden} fill={fill} onClick={onClick} aria-labelledby={arialLabel}>
      <span id={arialLabel} hidden>
        {closeLabel || 'Close'}
      </span>
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
      </svg>
    </CloseIconButton>
  );
};

export default CloseIcon;
