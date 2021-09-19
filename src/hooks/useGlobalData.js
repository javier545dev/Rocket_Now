import { useContext } from 'react'

import GlobalContext from '@Context'

export default function useGlobalData() {
  const { isAuth, user, isLanding } = useContext(GlobalContext)
  return {
    isAuth,
    user,
    isLanding
  }
}
