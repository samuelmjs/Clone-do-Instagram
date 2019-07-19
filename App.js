import React, { Component } from 'react';
import { View, StatusBar, Alert } from 'react-native';

import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  state = {
    liked: false
  }


  render() {
    const comments = [
      {
        nickname: 't.waishaupt',
        comment: 'Locão',
      },
      {
        nickname: 'Lucleite',
        comment: 'o cara só viaja',
      }
    ]

    onClickLiked = () => {
      this.setState({ liked: !liked })
    }
    const { liked } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Header />
        <Post
          image={require('./assets/images/boat.jpg')}
          likes='1.308'
          comments={comments}
          liked={liked} onClickLiked={onClickLiked} />
      </View>
    );
  }
}