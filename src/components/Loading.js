import React, { PropTypes, Component } from 'react'
import { View } from 'react-native';
import Animation from 'lottie-react-native';
import { anis } from '../commons'
import styles from './styles/Loading'

export default class Loading extends Component {

    static propTypes = {
        source: PropTypes.any,
        loop: PropTypes.bool,
        style: PropTypes.object,
        speed: PropTypes.number
    }

    static defaultProps = {
        source: anis.loading,
        loop: true,
        speed: 1
    }

    componentDidMount() {
        this.animationRoot.play()
    }

    render() {
        let { source, loop, style, speed } = this.props
        return (
            <View>
                <Animation
                    ref={(componetn) => this.animationRoot = componetn}
                    style={[styles.constant, style]}
                    source={source}
                    loop={loop}
                    speed={speed}
                />
            </View>
        );
    }
}