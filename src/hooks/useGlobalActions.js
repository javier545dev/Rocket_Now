import { useContext } from 'react'

import GlobalContext from '@Context'

export default function useGlobalActions() {
  const { reAuth, loginAction, logoutAuth } = useContext(GlobalContext)
  return {
    reAuth,
    loginAction,
    logoutAuth
  }
}
