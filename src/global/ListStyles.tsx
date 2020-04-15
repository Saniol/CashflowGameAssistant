import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    listHeader: {
        height: 20,
    },
    bigListHeader: {
        height: 40,
    },
    listBody: {
        flex: 1,
    },
    headerRow: {
        flex: 1,
        fontWeight: 'bold',
    },
    listRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 2,
    },
});
