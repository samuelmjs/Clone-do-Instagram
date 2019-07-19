import React, { Component } from 'react';

import { View,Text } from 'react-native';

// import { Container } from './styles';

class Search extends Component {
  render() {
    return <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
           <Text style={{fontSize:30}}>Search!</Text> 
    </View>;
  }
}

export default Search
