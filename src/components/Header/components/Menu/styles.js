import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  menuItem: {
    display: 'grid',
    padding: '0',
    height: '0.1rem',
    minHeight: '35px',
    paddingTop: '13px',
    alignItems: 'center',
    justifyContent: 'center',
    gridTemplateColumns: '1fr 1fr',
    gap: 10
  },
  icon: {
    height: 20,
    width: 20
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
  logo: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: '500'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  footerText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#FFFF',
    padding: '2px 0',
    minHeight: '15px'
  },
  footerSocialNetwork: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    BackgroundColor: 'white'
  },
  boxItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'overlay',
    width: '100%',
    height: 'calc(100% - 103px)',
    color: 'white'
  }
}))
