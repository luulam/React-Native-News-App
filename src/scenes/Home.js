import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import { TabNavigator } from 'react-navigation';
import { configs, constants, arrays, icons, strings, colors } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import { Icon, Header } from '../components'
import { string, isNull, getUrlImage, navi } from '../helper'
import styles from './styles/Home'

class Home extends Component {
    state = {
        search: ''
    }
    render() {
        const { language } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    {/*<Icon name='menu' />*/}
                    <Text style={styles.appTitle}>{string('listNews', language)}</Text>
                    {/*<Icon name='more-vert' />*/}
                </Header>
                <View style={styles.bgSearch}>
                    <Icon name='search' color={colors.appBg} />
                    <TextInput
                        placeholder={string('search', language)}
                        placeholderTextColor='gray'
                        style={styles.inputSearch}
                        onChangeText={(v) => this.setState({ search: v })}
                        value={this.state.search}
                    />
                </View>
                <FlatList data={this._getSource(this.state.search)}
                    numColumns={4}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.itemList}
                                onPress={() => { this._onPressItem(index) }}>
                                <Image source={{ uri: getUrlImage(item['url']) }}
                                    style={{ width: configs.screenWidth / 6 - 8, height: configs.screenWidth / 6 - 8 }} />
                                <Text style={{ padding: 4 }} >{item['name']}</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View >
        )
    }
    _getSource = key => {
        const { source } = this.props;
        return source.filter(value => {
            if (isNull(key)) return true
            return (value['name'].toLowerCase().indexOf(key.toLowerCase()) === -1) ? false : true
        })
    }
    _onPressItem = index => {
        const { source } = this.props;
        // console.log('object', source[index]);
        this.props.navigation.dispatch(navi.to({ name: 'Articles', params: { infoArticles: source[index] } }))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: state,
        source: state.app.setting.source,
        language: state.app.setting.language
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showSnackBar: (data) => dispatch(showSnackBar(data)),
        showToast: (data) => dispatch(showToast(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)