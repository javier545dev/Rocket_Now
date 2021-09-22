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
  astronaut: {
    width: 60,
    marginBottom: 20
  },
  btn: {
    height: '45px',
    margin: '10px 0',
    '& > span': {
      fontFamily: 'Montserrat !important',
      fontWeight: '500',
      fontSize: 16,
      letterSpacing: '0.04rem'
    }
  },
  estrellablanca: {
    position: 'absolute',
    width: 7,
    top: '15%',
    left: '74%'
  },
  estrellablanca1: {
    position: 'absolute',
    width: 12,
    top: '45%',
    right: '10%'
  },
  estrellablanca2: {
    position: 'absolute',
    width: 10,
    top: '90%',
    left: '6%'
  },
  estrellablanca3: {
    position: 'absolute',
    width: 12,
    bottom: '7%',
    right: '20%'
  },
  estrellanaranja: {
    position: 'absolute',
    width: 8,
    bottom: '18%',
    left: '3%'
  },
  inputText: {
    paddingBlock: 5,
    marginBottom: 10
  },
  orbit: {
    position: 'absolute',
    width: '35%',
    top: 0,
    right: 0,
    objectFit: 'cover'
  },
  orbit2: {
    position: 'fixed',
    width: '30%',
    bottom: 0,
    left: -20,
    objectFit: 'cover'
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: '500'
  },
  text: {
    paddingBlock: 20
  }
}))
