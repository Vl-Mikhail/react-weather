import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$blackBlueColor',
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textColor: {
        color: '$whiteColor'
    },
    city: {
        color: '$whiteColor',
        fontSize: 22,
        fontWeight: '100',
    },
});

export default styles;