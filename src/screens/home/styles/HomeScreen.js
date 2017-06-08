import EStyleSheet from "react-native-extended-stylesheet";

/**
 * Стили для главного экрана
 * @type {Object}
 */
const styles = EStyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$blackBlueColor',
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-5%',
    },
    temp: {
        color: '$whiteColor',
        fontSize: 55,
        fontWeight: '100',
    },
    city: {
        color: '$whiteColor',
        fontSize: 22,
        fontWeight: '100',
    },
    input: {
        borderWidth: 1,
        borderColor: '#666',
        height: 40,
        color: '$whiteColor',
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    ForecastButton: {
        borderWidth: 1,
        borderColor: '#666',
        // backgroundColor: '#666',
        height: 40,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        color: 'white',
        justifyContent: 'center',
        alignItems:'center'
    },
    flowRight: {
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-5%',
    },
});

export default styles;
