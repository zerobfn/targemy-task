import Cookies from 'js-cookie'

const AUTH_HEADER_PREFIX = 'Token'
const COOKIE_KEY_AUTH_HEADER = 'token'

export const isLoggedIn = () => {
    const authHeader = Cookies.get(COOKIE_KEY_AUTH_HEADER)
    if (authHeader === undefined) return false
    return authHeader.indexOf(AUTH_HEADER_PREFIX) !== -1
}

export const clearCookies = () => {
    Cookies.remove(COOKIE_KEY_AUTH_HEADER)
}

export const getAuthToken = () => {
    return Cookies.get(COOKIE_KEY_AUTH_HEADER)
}

export const saveAuthTokenToCookie = (token) => {
    clearCookies()
    Cookies.set(COOKIE_KEY_AUTH_HEADER, `${AUTH_HEADER_PREFIX} ${token}`)
}