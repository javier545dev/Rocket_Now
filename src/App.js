import { useCallback, useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { Route, Switch, Redirect } from 'react-router-dom'
import {
  Asesoria,
  Error404,
  Gracias,
  Landing,
  Login,
  Saber,
  Signup
} from '@Page/'
import { Header, Loader } from '@Components'
import { profile } from '@API/actions'
import { useGlobalActions, useGlobalData } from '@Hooks'
import useStyles from './styles'
import clsx from 'clsx'

function App() {
  const classes = useStyles()
  const { reAuth } = useGlobalActions()
  const { isAuth, isLanding } = useGlobalData()
  const [loader, setLoader] = useState(true)

  const getDataUser = useCallback(async () => {
    try {
      const { data } = await profile()
      reAuth(data)
    } catch (error) {
      console.warn(error?.message)
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
    <Box
      className={clsx({
        [classes.root]: isLanding,
        [classes.anotherRoot]: !isLanding
      })}
    >
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
            <Route
              path="/launch"
              exact
              render={() => (!isAuth ? <Signup /> : <Redirect to="/" />)}
            />
            <Route path="/" exact component={Landing} />
            <Route path="/saber" exact component={Saber} />
            <Route path="/asesoria" exact component={Asesoria} />
            <Route path="/gracias" exact component={Gracias} />

            <Route path="*" component={Error404} />
          </Switch>
        </>
      )}
    </Box>
  )
}
export default App
