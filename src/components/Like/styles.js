import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    likes:{
        color: colors.dark,
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 3,
    }
})