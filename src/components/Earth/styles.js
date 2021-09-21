import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    height: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  title: {
    textAlign: 'center',
    margin: '10px 0',
    marginBottom: '5rem',
    fontFamily: 'Orbitron !important',
    fontWeight: 500
  },
  buttons: {
    height: '2.5rem',
    width: '13rem',
    marginBottom: '1rem',
    boxShadow: '0px 5px 5px 1px rgba(220,0,253,0.3)'
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
    width: 5,
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
  orbit: {
    position: 'absolute',
    width: '25%',
    top: -40,
    right: 15,
    objectFit: 'cover'
  },
  rocket: {
    position: 'absolute',
    width: 90,
    top: 40,
    right: 280,
    zIndex: 2,
    objectFit: 'cover',
    transform: 'rotate(120deg)'
  },
  planeta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginBottom: 50,
    zIndex: 1
  },
  candado: {
    width: 50,
    height: 50
  }
}))
