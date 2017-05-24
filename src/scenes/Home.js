import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native'
import { configs, constants, arrays, icons } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import { Icon } from '../components'
class Home extends Component {
    //oprion Header
    static navigationOptions = {

    };

    static state = {
        test: ''
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: configs.toolBarHeight, justifyContent: 'space-around', backgroundColor: 'red' }}>

                </View>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showSnackBar: (data) => dispatch(showSnackBar(data)),
        showToast: (data) => dispatch(showToast(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)