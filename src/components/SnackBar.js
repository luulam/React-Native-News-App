import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from '../components'
import { configs } from '../commons'
import styles from './styles/SnackBar'

class SnackBar extends Component {
    static propTypes = {
        snackBars: PropTypes.array,
    }

    static defaultProps = {
        snackBars: []
    }

    render() {
        if (this.props.snackBars.length === 0) return null
        return (
            <View style={styles.constant}>
                {
                    this.props.snackBars.map((value, index) => {
                        return (
                            <View style={styles.constant} key={index}>
                                <Text style={{color:'#fff'}}>{value['title']}</Text>
                            </View>
                        )
                    })
                }
                {this.props.children}
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        snackBars: state.app.snaskBars,
        state: state
    }
}
export default connect(mapStateToProps)(SnackBar)
