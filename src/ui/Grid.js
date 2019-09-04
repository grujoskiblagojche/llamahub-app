import { StyleSheet } from 'react-native';

const g = StyleSheet.create({
    view: { // app grid fix
        flex: 1,
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        position: 'relative'
    },
    app: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#111111'
    },
    inner: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 85
    },
    f: {
        display: 'flex'
    },
    f_r: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row'
    },
    f_c: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    },
    spb: {
        justifyContent: 'space-between'
    },
    r_ch: {
        justifyContent: 'center'
    },
    c_cv: {
        justifyContent: 'center'
    },
    r_cv: {
        alignItems: 'center'
    },
    c_ch: {
        alignItems: 'center'
    },
    abs: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        flexWrap: 'wrap'
    }
})

export default g;