import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px',
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
    fontFamily: 'Orbitron !important',
    fontWeight: 500
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    margin: '10px auto',
    width: '100%'
  },
  btn: {
    margin: '10px 0',
    '& > span': {
      fontFamily: 'Orbitron !important',
      letterSpacing: '0.18rem'
    }
  }
}))