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
    width: 320,
    top: 25,
    left: '0%'
  },
  estrellablanca: {
    position: 'absolute',
    width: 5,
    top: 25,
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
    bottom: 90,
    left: '5%'
  },
  estrellablanca3: {
    position: 'absolute',
    width: 10,
    top: 15,
    right: '11%'
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
    bottom: 90,
    right: '10%'
  },
  rocket: {
    position: 'absolute',
    top: '8%',
    right: '10%',
    width: '100px',
    zIndex: 1
  }
}))
