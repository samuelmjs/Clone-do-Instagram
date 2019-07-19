import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 10,
    },
    logo: {
        resizeMode: 'contain'
    },
    form:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    input:{
        padding: 7,
        margin: 5,
        width: '90%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.greyLight,
        backgroundColor: 'rgba(0,0,0,0.015)'
    },
    button:{
        padding: 10,
        margin: 5,
        width: '90%',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blueSky
    },
    text:{
        color: '#FFF',
        fontSize: 15,  
    },
    containerSignup:{
        flexDirection: 'row'
    },
    description:{
        fontSize: 13,
        color: colors.grey
    },
    signup:{
        fontSize: 13,
        color: colors.blueSky
    },
})