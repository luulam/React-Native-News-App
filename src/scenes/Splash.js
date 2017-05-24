import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';

import { configs, constants, arrays, anis, images, colors } from '../commons'
import { showSnackBar, showToast, saveSetting } from '../redux/actions/App'
import { Loading, Button } from '../components'
import { asyncSto, string } from '../helper'
import { getSources } from '../helper/Fetch'
import styles from './styles/Splash'


class Splash extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectLanguage: 0,
            isFetchError: false,
            isFirstSetup: false,
            fetchResponse: undefined
        }
    }

    renderOneLanguage = (v, i) => {
        return (
            <View key={i}>
                <Button
                    title={string('name', v)}
                    style={[
                        styles.margin,
                        { backgroundColor: this.state.selectLanguage !== i ? 'gray' : colors.buttonBg }
                    ]}
                    onPress={() => this.setState({ selectLanguage: i })} />
            </View>
        )
    }

    //render view select language at first setup App
    renderFirtsSetting() {
        const { isFetchError, isFirstSetup } = this.state

        if (isFetchError) {
            return (
                <View>
                    <Button title='Reload' onPress={this.onPressReload} />
                </View>
            )
        }

        if (isFirstSetup) {
            return (
                <View>
                    <Text style={[styles.appLabel, styles.label]} >{string('select_language', arrays.source_language[this.state.selectLanguage])}</Text>
                    <View style={styles.constLanguage}>
                        {arrays.source_language.map(this.renderOneLanguage)}
                    </View>
                    <Button title={string('confirm', arrays.source_language[this.state.selectLanguage])} style={styles.margin}
                        onPress={() => this.onPressConfirm()} />
                </View>
            )
        }

        return (
            <Loading />
        )
    }

    render() {
        return (
            <View style={styles.constant}>
                <Text style={styles.logo}> NEWS </Text>
                {this.renderFirtsSetting()}
                <Text style={styles.descrip}> Powered by LuuLam </Text>
            </View>
        )
    }

    componentDidMount() {
        this.fetchGetResource()
    }

    onPressReload = () => {
        this.setState({ isFetchError: false })
        this.fetchGetResource()
    }

    onPressConfirm = () => {
        asyncSto.set({ [constants.STO_LANGUAGE]: arrays.source_language[this.state.selectLanguage] })
            .then(response => {
                saveSetting({ language: arrays.source_language[this.state.selectLanguage] })
                this.resetScreen('Home')
            })
            .catch(error => {
                this.props.showToast(error)
                this.setState({ fetchLoading: false, fetchError: true })
            })
    }

    fetchGetResource = () => {
        let { saveSetting } = this.props
        getSources()
            .then(response => {
                saveSetting({ source: response })
                this.setState({ fetchResponse: response })
                this.checkLoginFirst()
            })
            .catch(err => {
                console.log('error', err)
                this.setState({ isFetchError: true })
            })
    }

    checkLoginFirst = () => {
        let { saveSetting } = this.props
        asyncSto.get(constants.STO_LANGUAGE)
            .then(response => {
                saveSetting({ language: response })
                if (!response) {
                    this.setState({ isFirstSetup: true })
                } else {
                    this.resetScreen('Home')
                }

            })
    }

    resetScreen = (name, params) => {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: name })
            ]
        }))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showSnackBar: (time, timeout) => dispatch(showSnackBar(time, timeout)),
        showToast: (time, timeout) => dispatch(showToast(time, timeout)),
        saveSetting: (data) => dispatch(saveSetting(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash)