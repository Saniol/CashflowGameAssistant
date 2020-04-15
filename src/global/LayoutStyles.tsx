import {StyleSheet} from 'react-native';
import Colors from '../global/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 12,
        paddingHorizontal: 24,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subheader: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 6,
    },
    footer: {
        fontSize: 18,
        fontWeight: '400',
        marginVertical: 18,
    },
    separator: {
        backgroundColor: Colors.light,
        height: 1,
    },
    boldSeparator: {
        backgroundColor: Colors.dark,
        height: 3,
    },
    columnsContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    rowsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    flexItem: {
        flex: 1,
    },
    flexItemX2: {
        flex: 2,
    },
    flexItemX3: {
        flex: 3,
    },
    flexItemX5: {
        flex: 5,
    },
    flexItemX8: {
        flex: 8,
    },
    flexItemX13: {
        flex: 13,
    },
});
