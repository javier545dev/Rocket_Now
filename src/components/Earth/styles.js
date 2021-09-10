import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    height: 'calc(100vh - 80px)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  astronaut: {
    width: 150,
    marginBottom: 50,
    zIndex: 1
  },
  estrellablanca: {
    position: 'absolute',
    width: 10,
    top: 25,
    left: '10%'
  },
  estrellablanca1: {
    position: 'absolute',
    width: 15,
    top: '40%',
    left: '15%'
  },
  estrellablanca2: {
    position: 'absolute',
    width: 20,
    bottom: 90,
    left: '5%'
  },
  estrellablanca3: {
    position: 'absolute',
    width: 20,
    top: 30,
    right: '10%'
  },
  estrellablanca4: {
    position: 'absolute',
    width: 10,
    top: '60%',
    right: '10%'
  },
  estrellaroja: {
    position: 'absolute',
    width: 15,
    bottom: 90,
    right: '10%'
  },
  rocket: {
    position: 'absolute',
    top: '12%',
    right: '6%'
  }
}))