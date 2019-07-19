import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class Comments extends Component {
    render() {
        let view = null;

        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.containerComment} key={index}>
                        <Text style={styles.name}>{item.nickname}</Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                );
            });
        }

        return (
            <View style={styles.container}>
                {view}
            </View>
        );
    }
}
