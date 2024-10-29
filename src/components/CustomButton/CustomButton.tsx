import React from 'react';
import { CustomButtonProps } from './CustomButton.types';
import styles from './CustomButton.module.css';

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  typeBtn = 'button',
  children,
}) => {
  return (
    <button className={styles.btn} onClick={onClick} type={typeBtn}>
      {children}
    </button>
  );
};

export default CustomButton;
