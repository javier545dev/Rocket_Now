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
  btn2: {
    height: '40px',
    margin: '10px 0',
    '& > span': {
      fontFamily: 'Montserrat !important',
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: '0.10rem'
    }
  },
  ref: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'baseline'
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
    padding: '0 5%',
    marginBottom: 30
  },
  input: {
    color: 'white',
    margin: '5px auto',
    width: '100%',
    height: '4rem'
  },
  inputMultiline: {
    color: 'black',
    margin: '5px auto',
    width: '100%',
    height: '4rem'
  },
  notchedOutline: {
    borderColor: 'white !important'
  },
  orbit: {
    position: 'absolute',
    width: '40%',
    top: '12.6%',
    left: '60%',
    objectFit: 'cover'
  },
  orbit2: {
    position: 'absolute',
    width: '35%',
    top: '87%',
    left: '0%',
    objectFit: 'cover',
    transform: 'rotate(200deg)'
  },
  subtitle: {
    textAlign: 'center',
    margin: '10px 0',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '20px'
  },
  title: {
    marginTop: '10px',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '10px',
    paddingTop: '20px'
  },
  titleHead: {
    marginTop: '30px',
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: '10px',
    paddingTop: '20px',
    padding: '0 5%'
  },
  boxBlank: {
    height: 80,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: '-28px',
    boxShadow: '-2px 3px 6px 0px #7a7c86'
  }
}))
