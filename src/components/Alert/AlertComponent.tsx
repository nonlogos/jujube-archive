import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { IAlertHeaderProps } from './AlertHeaderComponent';
import statusColorsApplier from '../../shared-utils/statusColorsApplier';
import { AlertHeader as Header } from './AlertHeaderComponent';
import CloseIcon from '../../shared-utils/iconComponents/CloseIcon';

const AlertComponent: React.FC<IAlertProps> & IAlertsComposition = ({
  children,
  accessibility,
  className,
  type,
  show = true,
  closable = false,
  closeLabel,
  onClose,
}: IAlertProps) => {
  const [display, setDisplay] = useState(true);
  const role = (accessibility && accessibility.role) || 'alert';
  const arialLabelledby = (accessibility && accessibility.arialLabelledby) || null;
  const arialDescribedby = (accessibility && accessibility.arialDescribedby) || null;
  const arialLive = (accessibility && accessibility.arialLive) || null;

  const onCloseHandler = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
    setDisplay(!display);
  };

  return (
    <div
      role={role}
      arial-labelledby={arialLabelledby}
      arial-describedby={arialDescribedby}
      arial-live={arialLive}
      className={className}
      hidden={!show || !display}
    >
      <CloseIcon
        hidden={!closable}
        fill={statusColorsApplier(type, 'color')}
        onClick={onCloseHandler}
        closeLabel={closeLabel}
      />
      {children}
    </div>
  );
};

AlertComponent.Header = Header;

/**
 * ======= Alert Styles =====================
 */

const DefaultStyles = styled(AlertComponent)`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

const PropStyles = styled(DefaultStyles)`
  background: ${({ type }) => statusColorsApplier(type, 'background')};
  color: ${({ type }) => statusColorsApplier(type, 'color')};
  border-color: ${({ type }) => statusColorsApplier(type, 'border')};
`;
export const Alert = styled(PropStyles)`
  ${({ customStyles }) => customStyles}
`;

/**
 * ========= Interfaces =================
 */

interface IAlertProps {
  children?: ReactNode;
  /**
   * type: string (not required).
   *  If none passed in, styles will default to secondary or overridden by customStyles passed in
   * @default null
   **/
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  /**
   * (not required)
   * @default "false"
   **/
  closable?: boolean;
  /**
   * (not required)
   * if closable is true, you can add a custom closeLabel to be displayed as arial label text
   * if none provided it will be default to "close"
   * @default null
   **/
  closeLabel?: string;
  /**
   * (not required)
   * control the show state of the component
   * @default true
   **/
  show?: boolean;
  /**
   * (not required)
   * you can pass in any custom styles as an object. The styles will override default styles
   * @default null
   **/
  customStyles?: Record<string, string>;
  /**
   * (not required)
   * you can pass in custom accessibility attributes that may better suit your content and alert type
   * @default null
   **/
  accessibility?: {
    role?: string;
    arialLabelledby?: string;
    arialDescribedby?: string;
    arialLive?: string;
  };
  className?: string;
  /**
   * (not required)
   * you can pass an additional function to be called when user clicks the close icon
   * [note: closable has to be true]
   * @default null
   **/
  onClose?: (...args: any[]) => any;
}

interface IAlertsComposition {
  Header: React.FC<IAlertHeaderProps>;
}

export default Alert;
