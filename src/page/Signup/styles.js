import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
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
  notchedOutline: {
    padding: '14.5px 12px',
    borderColor: 'white !important'
  },
  title: {
    textAlign: 'center',
    margin: '10px 0',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '1px'
  },
  subtitle: {
    textAlign: 'center',

    margin: '10px 0',
    fontFamily: 'Montserrat !important',
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
    color: 'white',
    margin: '5px auto',
    width: '100%',
    height: '4rem'
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
  btn2: {
    height: '45px',
    margin: '10px 0',
    '& > span': {
      justifyContent: 'space-between',
      paddingLeft: 14,
      paddingRight: 16,
      fontFamily: 'Montserrat !important',
      fontWeight: '400',
      fontSize: 14,
      letterSpacing: '0.04rem'
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
    top: '17%',
    left: '28%'
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
  titleHead: {
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '12%',
    paddingTop: '15%'
  }
}))
