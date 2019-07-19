import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback as Touchable, Alert } from 'react-native';

import styles from './styles';

import heart from '../../../assets/images/heart_icon.png';
import heart_liked from '../../../assets/images/heart_icon_liked.png';
import bubble from '../../../assets/images/bubble_icon.png';
import direct from '../../../assets/images/direct_icon.png';

export default props => {

  const liked = props.liked ? heart_liked : heart;

  return (
    <View style={styles.container} >
      <Touchable onPress={props.onClickLiked}>
        <Image source={liked} style={styles.icon} />
      </Touchable>
      <Image source={bubble} style={styles.icon} />
      <Image source={direct} style={styles.icon} />
    </View>
  );

}

