import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    height: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    scrollBehavior: 'smooth'
  },
  title: {
    textAlign: 'center',
    margin: '10px 0',
    fontFamily: 'Orbitron !important',
    fontWeight: 500,
    paddingBottom: '0.5rem',
    marginBottom: '8rem'
  },
  buttons: {
    height: '2.5rem',
    width: '13rem',
    marginBottom: '1rem',
    boxShadow: '0px 5px 5px 1px rgba(220,0,253,0.3)'
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
    width: 10,
    top: 30,
    right: '10%',
    objectFit: 'cover'
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
  glowblue: {
    position: 'absolute',
    width: 45,
    bottom: '1%',
    right: '80%'
  },
  rocket: {
    position: 'absolute',
    width: '80px',
    top: '20%',
    right: '40%',
    transform: 'rotate(340deg)'
  },
  planeta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginBottom: 50
  },
  candado: {
    width: 50,
    height: 50
  }
}))
