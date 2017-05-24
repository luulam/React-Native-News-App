
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
                console.log('getSources', error)
                reject(error)
            })
    })
}

export const getArticles = function (arg) {
    return new Promise((resolve, reject) => {
        fetch(`${constants.URL_SOURCE}${arg.category ? 'source=' + arg.category : ''}${arg.language ? '&sortBy=' + arg.language : ''}`)
            .then((response) => response.json())
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.log('getArticles', error)
                reject(error)
            })
    })
}