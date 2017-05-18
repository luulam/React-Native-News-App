import { StyleSheet } from 'react-native'
import configs from './Configs'
import colors from './Colors'

export default styles = StyleSheet.create({
    appConst: {
        flex: 1,
        backgroundColor: colors.appBg
    },
    appLabel: {
        color: 'white',
        fontSize: configs.font.medium
    }
})
