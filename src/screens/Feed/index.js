import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, FlatList, StatusBar, Animated, Alert } from 'react-native';
import Header from '../../components/Header';
import Post from '../../components/Post';


import styles from './styles';


class Feed extends Component {

    onClickLiked = id => {
        this.props.posts.forEach(item => {
            if (item.id === id)
                item.liked = !item.liked;
        })
    }

    AnimatedLike = id => {
        this.onClickLiked(id);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
                <Header />
                <FlatList data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} onClickLiked={this.onClickLiked} onClickAnimatedLike={() => this.AnimatedLike(item.id)} />} />
            </View>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(Feed)
