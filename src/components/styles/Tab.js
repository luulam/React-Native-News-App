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
        borderColor: 'white',
        backgroundColor: 'white',
    },
    notSelect: {
        alignItems: 'center',
        paddingHorizontal: configs.paddingHorizontal,
        paddingVertical: configs.paddingVertical,
        borderLeftWidth: configs.borderWidth,
        borderRightWidth: configs.borderWidth,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    labelSelect: {
        // ...styles.appTitle,
        color: 'white',
    },
    labelNotSelect: {
        // ...styles.appTitle,
        color: 'white',
    }
}

