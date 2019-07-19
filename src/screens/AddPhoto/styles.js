import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        height: 60,
        backgroundColor: '#FFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button:{

    },
    PhotoSelectedContainer: {
        flex: 1,
        minHeight: (Dimensions.get('window').height / 2),
        maxHeight: (Dimensions.get('window').height / 2),
    },
    photoSelected: {
        flex: 1,
        resizeMode: 'cover',
    },
    photoContainer: {
        flexDirection: 'row'
    },
    imageContainer: {
        width: (Dimensions.get('window').width - 4) / 4,
        height: (Dimensions.get('window').width - 4) / 4,
        justifyContent: 'center',
        marginRight: 2,
        marginBottom: 2,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    }
    // title: {
    //     fontSize: 20,
    //     marginTop: Platform.OS === 'ios' ? 30 : 10,
    //     fontWeight: 'bold',
    // },
    // imageContainer: {
    //     width: '90%',
    //     alignItems:'center',
    //     height: Dimensions.get('window').width / 2,
    //     backgroundColor: '#EEE',
    //     marginTop: 10,
    // },
    // image: {
    //     width: Dimensions.get('window').width,
    //     height: Dimensions.get('window').width / 2,
    //     resizeMode: 'center',
    // },
    // buttom: {
    //     marginTop: 30,
    //     padding: 10,
    //     backgroundColor: '#4286f4'
    // },
    // buttomText: {
    //     fontSize: 20,
    //     color: '#FFF',
    // },
    // input: {
    //     marginTop: 20,
    //     width: '90%',
    // }

})