import { useContext } from 'react'

import GlobalContext from '@Context'

export default function useGlobalActions() {
  const { reAuth, loginAction } = useContext(GlobalContext)
  return {
    reAuth,
    loginAction
  }
}
