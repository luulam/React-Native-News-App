import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constant: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: configs.screenWidth,
        height: configs.screenHeight
    },
    constLanguage: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    logo: {
        textShadowColor: 'gray',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        marginTop: configs.screenHeight / 3,
        textAlign: 'center',
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
    },
    descrip: {
        marginVertical: 24,
        fontStyle: 'italic'
    },
    label: {
        margin: 12,
        fontSize: configs.font.regular,
        textAlign: 'center'
    },
    margin: {
        margin: 12
    }
}
