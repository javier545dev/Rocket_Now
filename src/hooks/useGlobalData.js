import { useContext } from 'react'

import GlobalContext from '@Context'

export default function useGlobalData() {
  const { isAuth, user } = useContext(GlobalContext)
  return {
    isAuth,
    user
  }
}
