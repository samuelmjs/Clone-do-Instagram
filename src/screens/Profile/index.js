import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/user';

import styles from './styles';

class Profile extends Component {
  logout = () => {
    this.props.onLogout()
    this.props.navigation.navigate('Auth')
  }


  render() {
    const name = this.props.name || 'Sem nome'
    return (
      <View style={styles.container}>
        <View style={styles.profile}>

          <View style={styles.containerProfile}>
            <View style={styles.photoProfile} />

            <View style={styles.containerProfileInfo}>
              <View style={styles.containerinfo}>
                <View style={styles.info}>
                  <Text style={styles.contInfo}>40</Text>
                  <Text style={styles.infoDescription}>Posts</Text>
                </View>
                <View style={styles.info}>
                  <Text style={styles.contInfo}>40</Text>
                  <Text style={styles.infoDescription}>Followers</Text>
                </View>
                <View style={styles.info}>
                  <Text style={styles.contInfo}>40</Text>
                  <Text style={styles.infoDescription}>Following</Text>
                </View>
              </View>
              <View style={styles.follow}>
                <Text style={styles.button}>Follow</Text>
                <TouchableOpacity onPress={this.logout} style={[styles.button, { width: '15%' }]}>
                  <Icon name='clear' size={15} color='#FFF' />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.infoUser}>
            <Text style={styles.nickname}>{name}</Text>
            <Text style={styles.description}>description</Text>
          </View>

        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);