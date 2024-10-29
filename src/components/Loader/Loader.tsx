import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <InfinitySpin />
    </div>
  );
};

export default Loader;
