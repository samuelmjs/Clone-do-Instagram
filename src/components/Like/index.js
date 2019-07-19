import React from 'react';
import { View,Text } from 'react-native';

import styles from './styles';

export default props => {
  return (
    <View style={styles.container}>
        <Text style={styles.likes}>{props.likes}</Text>
        <Text style={styles.likes}>Likes</Text>
    </View>
  );
}
