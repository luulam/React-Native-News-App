

import { configs, colors, styles } from '../../commons'

export default style = {
    ...styles,
    constant: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: configs.screenWidth,
        height: configs.screenHeight
    },
    itemListVer: {
        borderRadius: 4,
        padding: 4,
        margin: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: configs.screenWidth - 8,
    },
    itemListHor: {
        flex: 1,
        borderRadius: 4,
        padding: 4,
        margin: 4,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: configs.screenWidth - 8,
    },
    imgArticleVer: {
        width: configs.screenWidth - 8,
        height: configs.screenWidth / 2.4
    },
    imgArticleHor: {
        width: configs.screenWidth * 0.9,
        height: configs.screenWidth * 0.9
    }
}
