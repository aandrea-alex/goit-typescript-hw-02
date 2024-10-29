import React from 'react';
import { ErrorMessageProps } from './ErrorMessage.types';
import { ERR_EMPTY_LOAD } from '../../notifications/constants';
import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ isError }) => {
  return isError ? <p className={styles.empty}>{ERR_EMPTY_LOAD}</p> : null;
};

export default ErrorMessage;
