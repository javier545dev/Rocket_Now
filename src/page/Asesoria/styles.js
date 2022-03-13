import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#454857',
    height: '100%',
    width: '100%',
    borderRadius: '130px 0 0 0'
  },
  btn: {
    height: '3rem',
    width: '13rem',
    margin: 30,
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
  media: {
    width: '100%',
    margin: 'auto'
  },
  notchedOutline: {
    borderColor: 'white !important'
  },
  ref: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'baseline'
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
    bottom: 0,
    left: -20,
    objectFit: 'cover',
    transform: 'rotate(230deg)'
  },
  title: {
    textAlign: 'left',
    marginTop: 10,
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 0,
    marginLeft: 50
  },
  title1: {
    textAlign: 'left',
    marginTop: 0,
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 30,
    marginLeft: 50
  },
  titleHead: {
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 0,
    paddingTop: 80,
    padding: '0 5%',
    marginLeft: 35
  },
  titleHead1: {
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    paddingBottom: 25,
    paddingTop: 0,
    padding: '0 5%',
    marginLeft: 35,
    textAlign: 'center'
  }
}))
