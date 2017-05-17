import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { View, Text, Image } from 'react-native'
import { configs, constants, arrays, anis, images } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import { Loading } from '../components'
import styles from './styles/Splash'
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
            <View style={styles.constant} source={images.background}>
                <Text style={styles.logo}> NEWS </Text>
                <Loading />
                <Text style={styles.descrip}> Powered by LuuLam </Text>
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