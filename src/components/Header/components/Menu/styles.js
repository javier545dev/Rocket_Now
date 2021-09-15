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
  orbit: {
    position: 'absolute',
    width: 100,
    top: 3,
    left: '69%'
  },
  orbit2: {
    position: 'absolute',
    width: 100,
    top: 410,
    left: '-5%',
    transform: 'rotate(180deg)'
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
  }
}))
