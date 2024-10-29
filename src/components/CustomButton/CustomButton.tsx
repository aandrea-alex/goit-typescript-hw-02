// import styles from './CustomButton.module.css';

// const CustomButton = ({ onClick, typeBtn, children }) => {
//   return (
//     <button className={styles.btn} onClick={onClick} type={typeBtn}>
//       {children}
//     </button>
//   );
// };

// export default CustomButton;

import React, { ReactNode } from 'react';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  onClick: () => void;
  typeBtn?: "button" | "submit" | "reset"; 
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, typeBtn = "button", children }) => {
  return (
    <button className={styles.btn} onClick={onClick} type={typeBtn}>
      {children}
    </button>
  );
};

export default CustomButton;