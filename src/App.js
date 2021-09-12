/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Landing, Login, Error404, Signup } from './page'
import { Header, Loader } from '@Components'
import { profile } from '@API/actions'
import { useGlobalActions, useGlobalData } from '@Hooks'
import useStyles from './styles'

function App() {
  const classes = useStyles()
  const { reAuth } = useGlobalActions()
  const { isAuth } = useGlobalData()
  const [loader, setLoader] = useState(true)

  const getDataUser = useCallback(async () => {
    try {
      const { data } = await profile()
      reAuth(data)
    } catch (error) {
      console.log('aqui error', error)
    } finally {
      setLoader(false)
    }
  }, [])

  useEffect(() => {
    getDataUser()
  }, [])

  useEffect(() => {
    if (isAuth) {
      getDataUser()
    }
  }, [isAuth])

  return (
    <Box className={classes.root}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Switch>
            <Route
              path="/login"
              exact
              render={() => (!isAuth ? <Login /> : <Redirect to="/" />)}
            />

            <Route
              path="/signup"
              exact
              render={() => (!isAuth ? <Signup /> : <Redirect to="/" />)}
            />
            <Route path="/" exact component={Landing} />
            <Route path="*" component={Error404} />
          </Switch>
        </>
      )}
    </Box>
  )
}
export default App
