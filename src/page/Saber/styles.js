import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#454857',
    height: '100%',
    width: '100%',
    borderRadius: '180px 0 0 0'
  },
  btn: {
    height: '50px',
    margin: '5px 0 35px 0',
    '& > span': {
      fontFamily: 'Montserrat !important',
      fontWeight: '500',
      fontSize: 16,
      letterSpacing: '0.08rem',
      textTransform: 'uppercase',
      padding: 15
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
    alignItems: 'center',
    position: 'relative',
    padding: '0 8%',
    marginBottom: 30
  },
  media: {
    width: '100%',
    margin: 'auto'
  },
  orbit: {
    position: 'absolute',
    width: '35%',
    top: 81,
    right: 0,
    objectFit: 'cover'
  },
  orbit2: {
    position: 'absolute',
    width: '35%',
    top: 700,
    left: -10,
    objectFit: 'cover',
    transform: 'rotate(230deg)'
  },
  title: {
    marginTop: '10px',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 10,
    paddingTop: 45
  },
  title1: {
    marginTop: '10px',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 10,
    paddingTop: 20
  },
  titleHead: {
    textAlign: 'center',

    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 0,
    paddingTop: 80,
    padding: '0 5%'
  },
  titleHead1: {
    textAlign: 'center',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 70,
    paddingTop: 0,
    padding: '0 5%'
  }
}))
