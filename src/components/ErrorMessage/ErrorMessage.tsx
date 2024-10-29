// import { ERR_EMPTY_LOAD } from '../../notifications/constants';
// import styles from './ErrorMessage.module.css';

// const ErrorMessage = ({ isError }) => {
//   return isError && <p className={styles.empty}>{ERR_EMPTY_LOAD}</p>;
// };

// export default ErrorMessage;

import React from 'react';
import { ERR_EMPTY_LOAD } from '../../notifications/constants';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  isError: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ isError }) => {
  return isError ? <p className={styles.empty}>{ERR_EMPTY_LOAD}</p> : null;
};

export default ErrorMessage;