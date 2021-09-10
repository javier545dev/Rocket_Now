import http from './http'
import * as urls from './urls'

export const login = (data) => http.post(urls.login, data, {})

export const profile = (data) => http.get(urls.user)

export const logout = (data) => http.get(urls.logout)
