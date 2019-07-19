import React, { Component } from 'react';
import { connect } from 'react-redux'

import { View, Text } from 'react-native';

// import { Container } from './styles';

class Like extends Component {
  render() {
    return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 30 }}>like!</Text>
    </View>;
  }
}

export default connect()(Like);