import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 15,
    },
    containerComment:{
        flexDirection: 'row',
        marginBottom: 4,
    },
    name:{
        fontSize: 15,
        color: colors.dark,
        fontWeight: 'bold',
        marginRight: 5,
    },
    comment:{
        fontSize: 15,
        color: colors.dark,
    },
})