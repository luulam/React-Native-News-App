import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { configs, colors } from '../commons'
import { Button } from '../components'
import styles from './styles/Tab'

class Tab extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        style: PropTypes.object,
        select: PropTypes.string.isRequired,
        onPress: PropTypes.func,
    }

    _renderItem = (value, index) => {
        let { select, onPress } = this.props
        return (
            <Button
                key={index}
                title={value}
                style={[
                    { backgroundColor: select === value ? colors.buttonBg : 'transparent' }
                ]}
                onPress={() => onPress(value)} />
        )
    }

    render() {
        let { data, style } = this.props
        return (
            <View style={styles.constant}>
                {data.map(this._renderItem)}
            </View>
        )
    }
}

export default Tab