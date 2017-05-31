
import { constants } from '../commons'

export const getSources = function (arg) {
    return new Promise((resolve, reject) => {
        fetch(`${constants.URL_SOURCE}`)
            .then((response) => response.json())
            .then((response) => {
                if (response['status'] !== 'ok') return reject('request false')
                resolve(response['sources'])
            })
            .catch((error) => {
                console.info('getSources', error)
                reject(error)
            })
    })
}

export const getArticles = function (arg) {
    console.log('asdasd',`${constants.URL_ARTICLE}${arg.source ? '&source=' + arg.source : ''}${arg.language ? '&sortBy=' + arg.language : ''}`)
    return new Promise((resolve, reject) => {
        fetch(`${constants.URL_ARTICLE}${arg.source ? '&source=' + arg.source : ''}${arg.sortBy ? '&sortBy=' + arg.sortBy : ''}`)
            .then((response) => response.json())
            .then((response) => {
                if (response['status'] !== 'ok') return reject('request false')
                resolve(response['articles'])
            })
            .catch((error) => {
                console.info('getArticles', error)
                reject(error)
            })
    })
}

export default {
    getSources,
    getArticles
}