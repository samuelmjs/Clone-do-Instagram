import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  CameraRoll,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { addPost } from '../../store/actions/posts'
import ImagePicker from 'react-native-image-picker';

import styles from './styles';
const maxPhotos = 28;

class AddPhoto extends Component {
  state = {
    images: [],
    comment: '',
    photoIndex: 0,

  }

  componentDidMount = () => {
    this.getPhoto();
  }

  getPhoto = async after => {
    let { photoIndex } = this.state
    const res = await CameraRoll.getPhotos({
      first: maxPhotos,
      after
    });

    photoIndex[1] = res.edges[0].node.timestamp;
    this.setState({ images: [...this.state.images, ...res.edges], photoIndex });
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
          <Image key={index} source={{ uri: item.node.image.uri }} style={styles.photoSelected} />
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

  // pickImage = () => {
  //   ImagePicker.showImagePicker({
  //     title: 'Escolha a imagem',
  //     maxHeight: 600,
  //     maxWidth: 800,
  //   }, res => {
  //     console.log(res)
  //     if (!res.didCancel) {
  //       this.setState({ image: { uri: res.uri, base64: res.data } })
  //     }
  //   })

  // }

  save = async () => {
    
    this.setState({ photoIndex: 0, comment: '' });
    this.onCancel();
  }


  onCancel = () => {
    this.props.navigation.navigate('Feed');
  }

  next = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.onCancel()}>
            <Text style={styles.button}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.next()}>
            <Text style={styles.button}>Avançar</Text>
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

const mapStateToProps = ({ user }) => {
  return {
    name: user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);