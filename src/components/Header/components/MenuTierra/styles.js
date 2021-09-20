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
    bottom: -50,
    left: -20,
    objectFit: 'cover',
    transform: 'rotate(220deg)'
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
