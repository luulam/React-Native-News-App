

import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constant: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: configs.screenWidth,
        height: configs.screenHeight
    },
    inputSearch: {
        height: 38,
        color: 'black',
        flex: 1
    },
    bgSearch: {
        marginBottom: 4,
        marginHorizontal: 4,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'white',
        padding: 4,
        flexDirection: 'row',
        paddingHorizontal: 12
    },
    itemList: {
        borderRadius: 4,
        margin: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: configs.screenWidth / 3 - 8,
        height: configs.screenWidth / 3 - 8
    }
}
