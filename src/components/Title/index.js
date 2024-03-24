/* eslint-disable prettier/prettier */

import React from 'react';
import {Text} from 'react-native';
import styles from './style';

const Title = () => {
  return <Text style={styles.title}>Title component</Text>;
};

export default React.memo(Title);
