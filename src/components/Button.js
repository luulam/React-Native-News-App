import React, { PropTypes, Component } from 'react'
import { View, TouchableOpacity } from 'react-native';
import { Text } from './'
import { configs } from '../commons'
import styles from './styles/Button'


class Button extends Component {
    static propTypes = {
        style: PropTypes.any,
        styleText: PropTypes.any,
        onPress: PropTypes.func,
        title: PropTypes.string,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        toasts: []
    }

    render() {
        const { style, onPress, title, disabled, styleText } = this.props
        return (
            <TouchableOpacity onPress={onPress} disabled={disabled || false}>
                <View style={[
                    styles.constant,
                    disabled && styles.disabled,
                    style
                ]}>
                    {title ? <Text style={[styles.text, styleText]}>{title}</Text> : null}
                    {this.props.children}
                </View>
            </TouchableOpacity >
        )
    }
}

export default Button
