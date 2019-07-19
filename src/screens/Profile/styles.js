import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    profile: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.grey,
        marginTop: 10,
       
    },
    containerProfile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15, 
        marginHorizontal: 10,       
    },
    photoProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'black',
        marginRight: 5
    },
    containerProfileInfo: {
        flex: 1,
    },
    containerinfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    info: {
        alignItems: 'center',
        margin: 10
    },
    contInfo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.dark
    },
    infoDescription: {
        fontSize: 13,
        color: colors.grey
    },
    follow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: colors.blueSky,
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        borderRadius: 3,
        fontWeight: 'bold',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoUser:{
        marginHorizontal: 10,
    },
    nickname:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.dark,
    },
    description: {
        fontSize: 15,
        color: colors.dark,
        marginBottom: 10,
    }

})