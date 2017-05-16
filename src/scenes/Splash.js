import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { View, Text, ActivityIndicator } from 'react-native'
import { configs, constants, arrays, styles } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'

class Splash extends Component {
    //oprion Header
    static navigationOptions = {

    };

    static state = {
        test: ''
    }
    componentDidMount() {
        this.onCheckLoginFirst()
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.appConst}>
                <Text>Splash</Text>
                <ActivityIndicator />
            </View>
        )
    }

    onCheckLoginFirst = () => {
        
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
export default connect(mapStateToProps, mapDispatchToProps)(Splash)