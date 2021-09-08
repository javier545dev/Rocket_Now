import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  menuItem: {
    display: 'grid',
    padding: '10px 0',
    alignItems: 'center',
    justifyContent: 'center',
    gridTemplateColumns: '1fr 1fr',
    gap: 10
  },
  logo: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 18,
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
    fontSize: '14px',
    color: '#616161',
    padding: '10px 0'
  },
  footerSocialNetwork: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
}))
