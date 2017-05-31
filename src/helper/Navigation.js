import { NavigationActions } from 'react-navigation'


const to = function (arg) {
    return NavigationActions.navigate({
        routeName: arg.name,
        params: arg.params,
    })
}

const reset = function (arg) {
    return NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: arg.name, params: arg.params })
        ]
    })
}

const back = function (arg) {
    return NavigationActions.back({
        key: arg.name
    })
}

const refresh = function (arg) {
    return NavigationActions.setParams({
        params: arg.params,
        key: arg.name,
    })
}

export default {
    to,
    reset,
    back,
    refresh
}