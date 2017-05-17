//apikey newsapi.org
export const API_KEY = 'bd6a346fbc934d0eb691c04320661937'

//url
export const URL_BASE = 'https://newsapi.org/'
export const URL_VESSION = 'v1/'
export const URL_SOURCE = `${URL_BASE}${URL_VESSION}sources?`
export const URL_ARTICLE = `${URL_BASE}${URL_VESSION}article?apiKey=${API_KEY}`

//asynStorage
export const STO_LANGUAGE = 'STO_LANGUAGE'
export const STO_CATEGORY = 'STO_CATEGORY'

export default {
    URL_BASE,
    URL_VESSION,
    URL_SOURCE,
    URL_ARTICLE,

    STO_LANGUAGE,
    STO_CATEGORY
}