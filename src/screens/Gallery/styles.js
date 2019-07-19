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
        height: 40,
        backgroundColor: '#FFF',
        borderColor: colors.greyLight,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    containerIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFF',
        marginLeft: 15,
        marginBottom: 10
    },
    icon: {
        transform: [
            {
                rotate: '-45deg'
            }
        ]
    },
    buttom: {
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
        color: colors.dark
    },
    PhotoSelectedContainer: {
        flex: 1,
        minHeight: (Dimensions.get('window').height / 2),
        maxHeight: (Dimensions.get('window').height / 2),
    },
    photoSelected: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end'
    },
    photoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: (Dimensions.get('window').width - 6) / 4,
        height: (Dimensions.get('window').width - 6) / 4,
        justifyContent: 'center',
        marginBottom: 2
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