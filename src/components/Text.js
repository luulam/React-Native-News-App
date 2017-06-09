import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import { configs } from '../commons'
import styles from './styles/Text'
class AppText extends Component {

    static PropsTypes = {
        style: PropTypes.object,
        numberOfLines: PropTypes.number,
        ellipsizeMode: PropTypes.string,

    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <Text
                {...this.props}
                ref={c => this._root = c}
                style={[styles.default, this.props.style]}
                numberOfLines={this.props.numberOfLines}
                ellipsizeMode={this.props.ellipsizeMode} >{this.props.children}</Text>
        )
    }
}

export default AppText