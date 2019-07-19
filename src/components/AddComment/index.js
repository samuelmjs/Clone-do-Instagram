import React, { Component } from 'react';
import colors from '../../../styles/colors';

import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback as Touchable,
    Alert,
} from 'react-native';

import styles from './styles';

export default class AddComment extends Component {
    state = {
        comment: '',
        editMode: false,
    }

    handleAddComment = () => {
        Alert.alert('comentario adcionado');
    }

    render() {
        const { comment, editMode } = this.state;
        let commentArea = null;
        let colorPost = editMode ? colors.grey : colors.blueSky;

        if (editMode) {
            commentArea = (
                <View style={styles.containerComment}>
                    <View style={styles.avatar} />
                    <View style={styles.containerInput}>
                        <TextInput placeholder='Adicione um comentário...'
                            style={styles.input}
                            value={comment}
                            multiline={true} autoFocus={true}
                            onChangeText={comment => this.setState({ comment })} />
                        <Touchable onPress={() => this.setState({ editMode: false })}>
                            <Text style={[styles.publicar, { color: colorPost }]}>Publicar</Text>
                        </Touchable>

                    </View >
                </View>
            );
        } else {
            commentArea = (
                <Touchable onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.containerComment}>
                        <View style={styles.avatar} />
                        <View style={styles.containerInput}>
                            <Text style={styles.input}>Adicione um comentário...</Text>
                            <Text style={styles.publicar}>Publicar</Text>
                        </View>
                    </View>
                </Touchable>
            )
        }


        return (
            <View style={styles.container}>
                {commentArea}
            </View>
        );
    }
}
