import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262a3f',
    padding: '0 40px',
    height: 'calc(100vh - 80px)',
    width: '100%'
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },
  title: {
    margin: '10px 0',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '20px'
  },
  subtitle: {
    margin: '10px 0',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '20px'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    borderRadius: 10,
    margin: '10px auto',
    width: '100%',
    height: '4rem'
  },
  btn: {
    margin: '10px 0',
    '& > span': {
      fontFamily: 'Orbitron !important',
      letterSpacing: '0.18rem'
    }
  }
}))
