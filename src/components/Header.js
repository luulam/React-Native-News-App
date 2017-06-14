import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { configs, colors } from '../commons'
import styles from './styles/Header'
import { Icon } from '../components'

class Header extends Component {
    render() {
        return (
            <View style={styles.default}>
                {this.props.children}
                {this.props.children && this.props.children.length % 2 === 0 ? <Icon hide /> : null}
            </View>
        )
    }
}

export default Header