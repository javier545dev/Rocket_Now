import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#454857',
    padding: '0 30px',
    height: 'calc(100vh - 80px)',
    width: '100%',
    borderRadius: '180px 0 0 0'
  },
  btn: {
    height: '50px',
    margin: '10px 0',
    '& > span': {
      fontFamily: 'Montserrat !important',
      fontWeight: '500',
      fontSize: 16,
      letterSpacing: '0.10rem'
    }
  },
  estrellablanca: {
    position: 'absolute',
    width: 10,
    top: '15%',
    left: '93%'
  },
  estrellablanca1: {
    position: 'absolute',
    width: 7,
    top: '25%',
    left: '30%'
  },
  estrellablanca2: {
    position: 'absolute',
    width: 10,
    top: '90%',
    left: '6%'
  },
  estrellablanca3: {
    position: 'absolute',
    width: 5,
    top: '95%',
    left: '90%'
  },
  estrellaroja: {
    position: 'absolute',
    width: 10,
    bottom: '15%',
    right: '10%'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    color: 'white',
    margin: '2% auto',
    width: '100%',
    height: '4rem'
  },
  notchedOutline: {
    borderColor: 'white !important'
  },
  orbit: {
    position: 'absolute',
    width: '35%',
    top: 81,
    right: 0,
    objectFit: 'cover'
  },
  orbit2: {
    position: 'fixed',
    width: '35%',
    top: '87%',
    left: '-4%',
    objectFit: 'cover',
    transform: 'rotate(200deg)'
  },
  subtitle: {
    textAlign: 'center',
    margin: '10px 0',
    fontFamily: 'Montserrat !important',
    fontWeight: 500
  },
  title: {
    marginTop: '30px',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '10px',
    paddingTop: '10%'
  },
  titleHead: {
    marginBlock: '30px',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '16px',
    paddingTop: 0,
    marginTop: '0 !important'
  }
}))
