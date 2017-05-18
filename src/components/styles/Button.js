import { configs, colors } from '../../commons'

export default styles = {
    constant: {
        backgroundColor: colors.buttonBg,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: configs.paddingHorizontal,
        paddingVertical: configs.paddingVertical,
        justifyContent: 'center'
    },
    disabled: {
        backgroundColor: 'gray'
    },
    text: {
        fontSize: configs.font.regular,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
}

