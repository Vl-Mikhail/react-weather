import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$blackBlueColor',
    },
    topContainer: {
        flex: 1,
    },
    textColor: {
        color: '$whiteColor'
    },
    city: {
        color: '$whiteColor',
        fontSize: 22,
        fontWeight: '100',
    },
    icon: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 20
    },
    headerText:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default styles;