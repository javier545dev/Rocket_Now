import http from './http'
import * as urls from './urls'

export const login = (data) => http.post(urls.login, data, {})

export const profile = (data) => http.get(urls.user)

export const signup = (data) => http.post(urls.signup, data, {})

export const logout = (data) => http.get(urls.logout)
