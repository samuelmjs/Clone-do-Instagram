import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../store/actions/user';
import logo from '../../../assets/images/name_img.png';

import styles from './styles';
import colors from '../../../styles/colors';

class Login extends Component {
    state = {
        name: 'Samuel',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state });
        this.props.navigation.navigate('Feed');
    }


    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.container} >
                <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
                <KeyboardAvoidingView behavior={Platform.select({
                    ios: 'padding',
                    android: null
                })} style={styles.form} enabled >
                    <Image style={styles.logo} source={logo} />
                    <TextInput placeholder='Username' placeholderTextColor={colors.grey}
                        style={styles.input} autoFocus={true}
                        keyboardType='email-address' value={email}
                        onChangeText={email => this.setState({ email })}
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false} />

                    <TextInput ref={(input) => { this.secondTextInput = input; }} placeholder='Password' placeholderTextColor={colors.grey}
                        style={styles.input}
                        secureTextEntry={true} value={password}
                        onChangeText={password => this.setState({ password })}
                        autoCorrect={false} />

                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <Text style={styles.text}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.containerSignup}>
                        <Text style={styles.description}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => { }} >
                            <Text style={styles.signup}> Sign up.</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) => {
            console.log(user)
            dispatch(login(user))
        }
    }
}

// export default Login
export default connect(null, mapDispatchToProps)(Login)
