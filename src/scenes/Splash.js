import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';

import { configs, constants, arrays, anis, images, colors } from '../commons'
import { showSnackBar, showToast, saveSetting } from '../redux/actions/App'
import { Loading, Button } from '../components'
import { storageGet, storageSave, string } from '../helper'
import { getSources } from '../helper/Fetch'
import styles from './styles/Splash'


class Splash extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fetchLoading: true,
            fetchError: false,
            fetchResponse: undefined,
            selectLanguage: 0,
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

    renderContent() {
        const { fetchFalse, fetchError, fetchLoading } = this.state
        if (fetchLoading) {
            return (
                <Loading />
            )
        }
        if (fetchError) {
            return (
                <View>
                    <Button title='Reload' onPress={this.onPressReload} />
                </View>
            )
        }
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

    render() {
        return (
            <View style={styles.constant}>
                <Text style={styles.logo}> NEWS </Text>
                {this.renderContent()}
                <Text style={styles.descrip}> Powered by LuuLam </Text>
            </View>
        )
    }

    componentDidMount() {
        let { saveSetting } = this.props
        storageGet(constants.STO_LANGUAGE)
            .then(resuft => {
                if (resuft) {
                    saveSetting({ language: resuft })
                    this.resetScreen('Home')
                } else {
                    this.fetchGetResource()
                }
            })
    }

    onPressReload = () => {
        this.setState({
            fetchLoading: true, fetchError: false
        })
        this.fetchGetResource()
    }

    onPressConfirm = () => {
        storageSave({ [constants.STO_LANGUAGE]: arrays.source_language[this.state.selectLanguage] })
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
        getSources()
            .then(response => {
                this.setState({ fetchLoading: false, fetchResponse: response })
            })
            .catch(err => {
                this.setState({ fetchLoading: false, fetchError: true })
            })
    }

    resetScreen = (name) => {
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