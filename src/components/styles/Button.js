import { configs, colors } from '../../commons'

export default styles = {
    constant: {
        backgroundColor: colors.accent,
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
        fontSize: configs.font.medium,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

