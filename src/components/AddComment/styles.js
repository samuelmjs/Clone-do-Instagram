import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex:1,
    },
    containerComment:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 80,
        height: 40,
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 50,
        marginLeft: 10,
    },
    input:{
        fontSize: 15,
        textAlignVertical: 'center',
        marginHorizontal: 5,
        color: colors.grey
        
    },
    publicar:{
        marginHorizontal: 5,
    },
    avatar:{
        width: 35,
        height: 35,
        borderRadius: 17,
        backgroundColor: "#ddd"
    }
})