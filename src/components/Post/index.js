import React, { Component } from 'react';

import { View, Image, Animated, TouchableWithoutFeedback, Alert } from 'react-native';
import styles from './styles';
import liking from '../../../assets/images/liking_heart_icon.png';

import Author from '../Author';
import Actions from '../Actions';
import Like from '../Like';
import Comments from '../Comments';
import AddComment from '../AddComment';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animated: new Animated.Value(0),
            zindex: 0
        }
    }

    lastTap = null;

    handleDoubleTap = () => {
        const now = Date.now();
        const doublePressDisplay = 300;

        if (this.lastTap && (now - this.lastTap) < doublePressDisplay) {
            this.AnimatedLike();
        } else {
            this.lastTap = now;
        }
    }

    AnimatedLike = () => {
        this.props.onClickAnimatedLike();

        this.setState({ zindex: 5 });
        Animated.timing(this.state.animated, {
            toValue: 1,
            duration: 400
        }).start(() => {
            Animated.timing(this.state.animated, {
                toValue: 0,
                duration: 400,
            }).start(() => {
                this.setState({ zindex: 0 });
            });

        })

    }
    render() {

        return (
            <View style={styles.container}>
                <Animated.Image source={liking} style={[styles.liking, { opacity: this.state.animated, zIndex: this.state.zindex }]} />
                <Author name={this.props.name} />
                <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
                    <Image source={{ uri: this.props.image }} style={styles.image} />
                </TouchableWithoutFeedback>
                <Actions liked={this.props.liked} onClickLiked={() => this.props.onClickLiked(this.props.id)} />
                <Like likes={this.props.likes} />
                <Comments comments={this.props.comments} />
                {/* <AddComment/> */}
            </View>
        );
    }
}
