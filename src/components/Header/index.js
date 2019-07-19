import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './styles';
import direct from '../../../assets/images/direct_icon.png'
import camera from '../../../assets/images/camera_icon.png';
import name from '../../../assets/images/name_img.png';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={camera} style={styles.icon} />
                </TouchableOpacity>
                <Image source={name} style={styles.name} />
                <TouchableOpacity>
                    <Image source={direct} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
}
