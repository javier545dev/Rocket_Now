import { createContext, useReducer } from 'react'
import globalReducer from './GlobalReducer'
import { useLocation } from 'react-router-dom'

const initialData = {
  isAuth: false,
  user: {},
  isLanding: false
}

const GlobalContext = createContext(initialData)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialData)
  const location = useLocation()
  const isLanding = location.pathname === '/'

  const loginAction = (payload) => {
    localStorage.setItem('token', payload.access_token)
    localStorage.setItem('token_type', payload.token_type)
    localStorage.setItem('expires_at', payload.expires_at)
    dispatch({ type: 'SET_LOGIN' })
  }

  const reAuth = (data) => {
    dispatch({ type: 'SET_AUTH', payload: data })
  }

  const logoutAuth = () => {
    localStorage.clear()
    dispatch({ type: 'SET_LOGOUT' })
  }

  const data = {
    ...state,
    reAuth,
    loginAction,
    logoutAuth,
    isLanding
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export default GlobalContext
