import { configs, colors } from '../../commons'

export default styles = {
    constant: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.primary
    },
    logo: {
        textDecorationLine: 'underline',
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        marginTop: configs.screenHeight / 3,
        textAlign: 'center',
        fontSize: configs.font.h1,
        color: 'white',
        fontWeight: 'bold',
    },
    descrip: {
        marginVertical: 24,
        color: 'white',
        fontStyle: 'italic'
    }
}
