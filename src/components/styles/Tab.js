import { configs, colors, styles } from '../../commons'

export default {
    constant: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 4
    },
    select: {
        alignItems: 'center',
        paddingHorizontal: configs.paddingHorizontal,
        paddingVertical: configs.paddingVertical,
        borderLeftWidth: configs.borderWidth,
        borderRightWidth: configs.borderWidth,
        borderColor: colors.border,
        backgroundColor: colors.bgSelect,
    },
    notSelect: {
        alignItems: 'center',
        paddingHorizontal: configs.paddingHorizontal,
        paddingVertical: configs.paddingVertical,
        borderLeftWidth: configs.borderWidth,
        borderRightWidth: configs.borderWidth,
        borderColor: colors.border,
        backgroundColor: colors.bgNotSelect,
    },
    labelSelect: {
        // ...styles.appTitle,
        color: colors.textSelect,
    },
    labelNotSelect: {
        // ...styles.appTitle,
        color: colors.textNotSelect,
    }
}

