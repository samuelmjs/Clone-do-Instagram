import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { addPost } from '../../store/actions/posts'
import Icon from 'react-native-vector-icons/MaterialIcons';
//import Modal from 'react-native-modal';

import styles from './styles';
import colors from '../../../styles/colors';


class NewPhoto extends Component {
    state = {
        comment: '',
    }

    save = () => {
        this.props.onAddPost({
            id: Math.random(),
            name: this.props.name,
            image: this.props.selected,
            likes: '0',
            liked: false,
            comment: this.state.comment = '' ? [] : [{
                nickname: this.props.name,
                comments: this.state.comment
            }]
        });

        this.setState({ comment: '' })
        this.props.navigation.navigate('Feed');
        this.props.close
    }

    onCancel = () => {
        this.props.navigation.navigate('Gallery');
    }

    render() {
        const { comment } = this.state;
        return (
            <View tyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.onCancel()}>
                        <Icon name='keyboard-arrow-left' size={25} color={colors.dark} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.save()}>
                        <Text style={styles.buttom}>Compartilhar</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.publicationContainer}>
                    <Image source={{ uri: this.props.selected }}
                        style={styles.image} />
                    <TextInput placeholder='Escreva alguma coisa...'
                        onChangeText={comment => this.setState({ comment })}
                        value={comment}
                        multiline={true}
                        style={styles.input} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ user, posts }) => {
    console.log(posts.selectedPhoto.selected)
    return {
        name: user.name,
        selected: posts.selectedPhoto.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPhoto);