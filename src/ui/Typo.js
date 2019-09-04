import { StyleSheet } from 'react-native';

const t = StyleSheet.create({
    title: {
        color: '#888',
        fontFamily: 'Anton-Regular',
        fontSize: 26,
        lineHeight: 36
    },
    opt: {
        color: '#fff',
        fontFamily: 'Anton-Regular',
        fontSize: 18,
        lineHeight: 26
    },
    stat: {
        color: '#eee',
        fontFamily: 'Anton-Regular',
        fontSize: 15
    },
    bannerText: {
        position: 'relative',
        color: '#f7f7f7',
        fontFamily: 'Anton-Regular',
        fontSize: 18,
        lineHeight: 24,
        transform: [{
            rotate: '1deg'
        }]
    },
    text: {
        color: '#888',
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        lineHeight: 20
    },
    itext: {
        color: '#c7c7c7',
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        lineHeight: 18
    },
    challenge: {
        color: '#fff',
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        lineHeight: 18
    },
    points: {
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        lineHeight: 18
    },
    input: {
        color: '#fff',
        fontFamily: 'Anton-Regular',
        fontSize: 20,
        lineHeight: 30
    },
    info: {
        color: '#111',
        fontFamily: 'Roboto-Regular',
        fontSize: 14
    },
    error: {
        color: '#ed1f55',
        fontFamily: 'Roboto-Thin',
        fontSize: 13,
        lineHeight: 16,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15
    },
    winner: {
        color: '#111',
        fontFamily: 'Anton-Regular',
        fontSize: 22
    },
    newsTitle: {
        color: '#ccc',
        fontFamily: 'Anton-Regular',
        fontSize: 24,
        marginBottom: 5
    },
    ad: {
        color: '#f7f7f7',
        fontFamily: 'Roboto-Thin',
        fontSize: 12
    }
})

export default t;