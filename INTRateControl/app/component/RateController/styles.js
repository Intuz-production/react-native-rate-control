import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        right: 15,
        left: 15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: 'white'
    },
    textHeader: {
        flex: 1,
        color: 'black',
        fontSize: 18,
        marginVertical: 10,
        alignSelf: 'center'
        // backgroundColor: 'red'
    },
    starView: {
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    btnCancel: {
        backgroundColor: '#00ACC1',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 25,
        overflow: 'hidden',
        alignSelf: 'center',
        marginBottom: 20
    },

    textCancel: {
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10
    },
    btnClose: {
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        marginTop: 10,
        overflow: 'hidden',
        alignSelf: 'flex-end',
    },
    inputText: {
        paddingVertical: 5,
        color: 'black',
        marginLeft: 10,
        fontSize: 14,
        textAlign: 'left'
    },
    inputView:{
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'flex-start',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: '#3c3c3c',
        overflow: 'hidden',
    },
});
