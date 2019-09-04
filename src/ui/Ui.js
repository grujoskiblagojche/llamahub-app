import { StyleSheet } from 'react-native';

const u = StyleSheet.create({
    card: {
        borderRadius: 3,
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowColor: '#000',
        shadowOpacity: 0.85,
        padding: 20,
        backgroundColor: '#222'
    },
    input: {
        height: 60,
        borderWidth: 1,
        borderColor: '#FFD166',
        padding: 15,
        margin: 10,
        backgroundColor: '#111'
    },
    winnerContainer: {
        paddingLeft: 10,
        paddingRight: 10
    },
    winner: {
        position: 'relative',
        height: 50,
        borderRadius: 3,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 5,
        backgroundColor: '#FFD166',
        zIndex: 3
    },
    submitBtn: {
        flex: 1,
        height: 65,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowColor: '#9e49d0',
        shadowOpacity: 0.3,
        borderWidth: 5,
        borderColor: '#9e49d0',
        backgroundColor: '#d376f3'
    },
    challenge: {
        width: '100%',
        height: 65,
        paddingLeft: 10,
        marginBottom: 2.5,
        borderRadius: 3,
        backgroundColor: '#199dc9'
    },
    challenge_info: {
        flex: 1,
        maxWidth: 75,
        height: '100%',
        borderTopEndRadius: 3,
        borderBottomEndRadius: 3,
        backgroundColor: '#118ab2'
    },
    start_img: {
        width: 30,
        height: 30,
        marginBottom: 5
    },
    slide: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    banner_wrapper: {
        width: '100%',
        position: 'relative',
        padding: 2,
        marginBottom: 10,
        transform: [{
            rotate: '0.5deg'
        }],
        backgroundColor: '#222'
    },
    banner_inner: {
        position: 'relative',
        height: 60,
        paddingLeft: 20,
        transform: [{
            rotate: '-1deg'
        }],
        backgroundColor: '#333'
    },
    br_cover_bg: {
        position: 'relative',
        marginBottom: 15,
        paddingTop: 2,
        paddingBottom: 2,
        transform: [{
            rotate: '1deg'
        }]
    },
    br_cover_img: {
        width: '102%',
        marginLeft: '-1%',
        height: 168,
        transform: [{
            rotate: '-2deg'
        }]
    },
    adSpace: {
        position: 'absolute',
        top: -10,
        right: -5,
        padding: 8,
        shadowOffset: {
            width: 0,
            height: 2.5
        },
        shadowColor: '#000',
        shadowOpacity: 0.25,
        zIndex: 5,
        transform: [{
            rotate: '-1deg'
        }]
    },
    weekBadge: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: '46%',
        height: 40,
        zIndex: 5,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        backgroundColor: '#118ab2',
        transform: [{
            rotate: '2.5deg'
        }]
    },
    itemDescHeader: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        borderRadius: 3,
        backgroundColor: '#222'
    },
    itemDesc: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopColor: '#333',
        borderWidth: 15
    },
    nav: {
        borderTopWidth: 2,
        borderTopColor: '#222',
        width: '100%',
        height: '100%',
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#111'
    },
    link: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        maxHeight: 65,
        padding: 0,
        marginBottom: 10,
        borderWidth: 5,
        borderColor: '#db8d2b',
        backgroundColor: '#FFD166',
        zIndex: 100
    },
    linkIcon: {
        borderLeftWidth: 2,
        borderColor: '#EDAF49',
    },
    tableRow: {
        flex: 1,
        height: 50,
        padding: 0,
        margin: 2,
    },
    tHeading: {
        backgroundColor: '#118ab2'
    },
    activeMod: {
        borderBottomWidth: 2,
        borderColor: '#118ab2',
        backgroundColor: '#333333'
    },
    tRow: {
        borderBottomWidth: 1,
        borderColor: '#111111',
        backgroundColor: '#222222'
    }
})

export default u;