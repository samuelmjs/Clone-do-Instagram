import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    CameraRoll,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { selectedPhoto } from '../../store/actions/posts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';


const maxPhotos = 28;
class Gallery extends Component {
    state = {
        images: [],
        photoIndex: 0,
        showNewPhoto: false
    }

    componentDidMount = () => {
        this.getPhoto();
    }

    getPhoto = async after => {
        let { photoIndex } = this.state
        const res = await CameraRoll.getPhotos({
            first: maxPhotos,
            assetType: 'Photos',
            after
        });

        this.setState({ images: [...this.state.images, ...res.edges], photoIndex });
    }

    getVideos = async () => {
        const res = await CameraRoll.getPhotos({
            first: maxPhotos,
            assetType: 'Videos'
        })
    }

    togglePhotoSelected = (id) => {
        let { images, photoIndex } = this.state;

        images.map((item, index) => {
            if (item.node.timestamp === id) {
                photoIndex = index;
            }
        })
        this.setState({ photoIndex })
    }

    PhotoSelected = () => {
        const { images, photoIndex } = this.state;
        let selected = null;

        selected = images.map((item, index) => {
            if (index === photoIndex) {
                return (
                    <ImageBackground key={index} source={{ uri: item.node.image.uri }} style={styles.photoSelected}>
                        <TouchableOpacity onPress={() => this.resize()} style={styles.containerIcon}>
                            <Icon name='code' size={20} color='#FFF' style={styles.icon} />
                        </TouchableOpacity>
                    </ImageBackground>
                )
            }
        })

        return selected;
    }

    renderItem = () => {
        const { images, photoIndex } = this.state

        return images.map((item, index) => {
            if (photoIndex === index) {
                return (
                    <TouchableWithoutFeedback key={index} onPress={() => this.togglePhotoSelected(item.node.timestamp)}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.node.image.uri }} style={[styles.image, { opacity: 0.5 }]} />
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
            return (
                <TouchableWithoutFeedback key={index} onPress={() => this.togglePhotoSelected(item.node.timestamp)}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.node.image.uri }} style={styles.image} />
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    isVisible = () => {
        this.setState({ showNewPhoto: true });
    }

    onCancel = () => {
        this.props.navigation.navigate('Feed');
    }

    next = () => {
        //this.isVisible();
        const { images, photoIndex } = this.state
        this.props.onSelected({ selected: images[photoIndex].node.image.uri })
        this.props.navigation.navigate('NewPhoto');
    }

    close = () => {
        this.setState({ showNewPhoto: false })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.onCancel()}>
                        <Text style={styles.buttom}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.next()}>
                        <Text style={[styles.buttom, { color: '#2EB8E6', fontWeight: 'bold' }]}>Avançar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.PhotoSelectedContainer}>
                    {this.PhotoSelected()}
                </View>
                <ScrollView>
                    <View style={styles.photoContainer}>
                        {this.renderItem()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSelected: selected => dispatch(selectedPhoto(selected))
    }
}



export default connect(null, mapDispatchToProps)(Gallery) 