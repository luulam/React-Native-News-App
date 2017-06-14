import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import { TabNavigator } from 'react-navigation';
import { configs, constants, arrays, icons, strings, colors } from '../commons'
import { Icon, Header, Tab, Loading, Button } from '../components'
import { string, isNull, getUrlImage, fetchApp, getObj, navi } from '../helper'
import styles from './styles/Articles'
import moment from 'moment'
class Articles extends Component {
    state = {
        selectSortBy: this.props.navigation.state['params']['infoArticles']['sortBysAvailable'][0],
        fetchArticles: {
            loading: false,
            error: false,
            response: []
        },
        typeShow: true
    }

    componentWillMount() {
        this._getArticles()
    }

    renderItemArticles = (item, index) => {
        let { typeShow } = this.state
        if (typeShow) {
            return (
                <TouchableOpacity
                    activeOpacity={configs.opacityPress}
                    key={index}
                    style={styles.itemListVer}
                    onPress={() => { this._onPressItem(item, index) }}>
                    <Image
                        resizeMode='cover'
                        source={{ uri: item['urlToImage'] }}
                        style={styles.imgArticleVer} />
                    <Text style={{ padding: 6, fontSize: configs.font.big, fontWeight: 'bold' }}>{item['title']}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity
                activeOpacity={configs.opacityPress}
                key={index}
                style={styles.itemListHor}
                onPress={() => { this._onPressItem(item, index) }}>
                <Image
                    resizeMode='cover'
                    source={{ uri: item['urlToImage'] }}
                    style={styles.imgArticleHor} />
                <Text style={{ fontSize: configs.font.big, fontStyle: 'italic' }}>{moment(item['publishedAt']).toNow()}</Text>
                <Text style={{ fontSize: configs.font.big, fontWeight: 'bold' }}>{item['title']}</Text>
                <Text style={{ padding: 6 }}>{item['description']}</Text>

            </TouchableOpacity>
        )
    }

    renderArticles = () => {
        const { fetchArticles, typeShow } = this.state
        if (fetchArticles.loading) {
            return (
                <View style={styles.appCenter}>
                    <Loading />
                </View>
            )
        }
        if (fetchArticles.error) {
            return (
                <View style={styles.appCenter}>
                    <Button title='reload' onPress={() => this._getArticles()} />
                </View>
            )
        }
        console.log('jaslkdjalsd', typeShow)
        return (
            <ScrollView
                pagingEnabled={typeShow ? false : true}
                horizontal={typeShow ? false : true}
                keyExtractor={(item, index) => index} >
                {fetchArticles.response.map(this.renderItemArticles)}
            </ScrollView>
        )
    }

    render() {
        const { language } = this.props;
        const { state, goBack } = this.props.navigation
        const { selectSortBy, typeShow } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Icon name='arrow-back' onPress={() => goBack()} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: getUrlImage(getObj(state, 'params', 'infoArticles', 'url')) }}
                            style={style.appIcon} />
                        <Text style={styles.appTitle}>{getObj(state, 'params', 'infoArticles', 'name')}</Text>
                    </View>
                    <Icon name={typeShow ? 'view-day' : 'view-array'} onPress={() => this._changeShow()} />
                </Header>
                <Tab
                    data={getObj(state, 'params', 'infoArticles', 'sortBysAvailable')}
                    select={selectSortBy}
                    onPress={this._onPressChangeSort} />
                {this.renderArticles()}
            </View >
        )
    }
    _changeShow() {
        this.setState({ typeShow: !this.state.typeShow })
    }

    _onPressItem = value => {
        this.props.navigation.dispatch(navi.to({ name: 'DetailPost', params: { infoPost: value } }))
    }

    _onPressChangeSort = value => {
        this.setState({ selectSortBy: value })
        this._getArticles(value)
    }

    _getArticles(srortBy) {
        let source = getObj(this.props.navigation.state, 'params', 'infoArticles', 'id')
        this.setState(Object.assign(this.state.fetchArticles, { loading: true, error: false }))
        fetchApp.getArticles({ source, sortBy: srortBy ? srortBy : this.state.selectSortBy })
            .then(response => {
                this.setState(Object.assign(this.state.fetchArticles, { loading: false, response: response }))
            })
            .catch(error => {
                this.setState(Object.assign(this.state.fetchArticles, { loading: false, error: true }))
            })
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: state,
        source: state.app.setting.source,
        language: state.app.setting.language,
    }
}

export default connect(mapStateToProps)(Articles)