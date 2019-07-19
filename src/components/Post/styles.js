import { StyleSheet, Dimensions,Alert } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (2.5 / 4),
        resizeMode: 'contain'
    },
    containerStatus:{
        flexDirection: 'row',
    },
    liking:{
        width: 80,
        height: 80,
        resizeMode: 'contain',
        position: 'absolute',
        top: Math.floor(Dimensions.get('window').width/3),
        left: Math.floor(Dimensions.get('window').width/2 - 30),
    }
})
