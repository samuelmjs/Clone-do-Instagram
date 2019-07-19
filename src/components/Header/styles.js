import { Platform, StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 5,
        height: 60,
        backgroundColor: '#FFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.greyLight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

    },
    name: {
        width: 280,
        height: 30,
        resizeMode: 'contain'
    },
    icon:{
        width: 25,
        height: 25,
        marginLeft: 10,
        marginRight:10,
        resizeMode: 'contain'
    }
})