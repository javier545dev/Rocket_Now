import { createContext, useReducer } from 'react'
import globalReducer from './GlobalReducer'

const initialData = {
  isAuth: false,
  user: {}
}

const GlobalContext = createContext(initialData)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialData)

  const loginAction = () => {
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
    logoutAuth
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export default GlobalContext
