import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        height: 40,
        backgroundColor: '#FFF',
        borderColor: colors.greyLight,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttom:{
        color:colors.blueSky,
        fontSize:18,
        marginRight: 10,
    },
    publicationContainer:{
        flexDirection: 'row',
        width:'100%',
        height: 100,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,

    },
    image:{
        width:100,
        height:'100%',
        resizeMode:'cover'
    },
    input:{
        height: '100%',
        fontSize: 18
    }
})