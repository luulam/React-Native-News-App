import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, TextInput, WebView } from 'react-native'
import { TabNavigator } from 'react-navigation';
import { configs, constants, arrays, icons, strings, colors } from '../commons'
import { Icon, Header } from '../components'
import { string, isNull, getUrlImage, navi, getObj } from '../helper'
import styles from './styles/Home'

class DetailPost extends Component {
    state = {
        search: ''
    }
    render() {
        const { language } = this.props;
        const { state, goBack } = this.props.navigation
        const { selectSortBy, typeShow } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Icon name='arrow-back' onPress={() => goBack()} />
                    <Text style={[styles.appTitle, { paddingHorizontal: 12 }]}>{getObj(state, 'params', 'infoPost', 'title')}</Text>
                </Header>
                <WebView
                    source={{ uri: getObj(state, 'params', 'infoPost', 'url') }}
                />
            </View >
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: state,
        source: state.app.setting.source,
        language: state.app.setting.language
    }
}
export default connect(mapStateToProps)(DetailPost)