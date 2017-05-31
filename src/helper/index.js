import { Platform, AsyncStorage } from 'react-native';
import { strings } from '../commons'
import asyncSto from './AsyncStorage'
import fetchApp from './Fetch'
import navi from './Navigation'

export function getPlatformValue(iosValue, androidValue) {
    if (Platform.OS === 'ios') return iosValue;
    return androidValue
}

export function isNull(obj) {
    if (obj === undefined || obj === null || obj === '' || obj.length <= 0) return true
    return false
}

export function getObj(obj, ...args) {
    for (let i = 0; i < args.length; i++) {
        if (!obj || obj[args[i]] === undefined) {
            return undefined;
        }
        obj = obj[args[i]];
    }
    return obj;
}

export const promise = () => action => next => (
    typeof action.then === 'function'
        ? Promise.resolve(action).then(next, (error) => { throw error })
        : next(action)
)

// check object exist array
export function checkObjectInArray(object, array) {
    if (array.indexOf(object) === -1) return false
    return true
}

export function string(key, language) {
    if (!key || !language) return undefined
    return strings[language][key]
}

export function getUrlImage(linkWeb){
    return `https://icons.better-idea.org/icon?size=70..120..200&url=${linkWeb}`
}

export {
    asyncSto,
    fetchApp,
    navi
}