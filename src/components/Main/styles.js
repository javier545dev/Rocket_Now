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
  buttons: {
    height: '2.5rem',
    width: '10rem',
    marginBottom: '1rem',
    boxShadow: '0px 5px 5px 1px rgba(220,0,253,0.3)'
  },
  astronaut: {
    width: 110,
    marginBottom: 60,
    zIndex: 2
  },
  curveblue: {
    position: 'absolute',
    width: '100%',
    top: '5%',
    left: '0%',
    objectFit: 'cover'
  },
  estrellablanca: {
    position: 'absolute',
    width: 5,
    top: '5%',
    left: '10%'
  },
  estrellablanca1: {
    position: 'absolute',
    width: 6,
    top: '40%',
    left: '15%'
  },
  estrellablanca2: {
    position: 'absolute',
    width: 15,
    bottom: '13%',
    left: '5%'
  },
  estrellablanca3: {
    position: 'absolute',
    width: 10,
    top: '0%',
    right: '10%'
  },
  estrellablanca4: {
    position: 'absolute',
    width: 6,
    top: '45%',
    right: '10%'
  },
  estrellaroja: {
    position: 'absolute',
    width: 10,
    bottom: '10%',
    right: '10%'
  },
  glowblue: {
    position: 'absolute',
    width: 45,
    bottom: '70%',
    right: '75%'
  },
  rocket: {
    position: 'absolute',
    top: '8%',
    right: '10%',
    width: '100px',
    zIndex: 1
  }
}))
