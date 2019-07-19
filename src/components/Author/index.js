import React from 'react';

import { View, Text,Image } from 'react-native';

import styles from './styles';

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.imageUser}/>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    );
}
