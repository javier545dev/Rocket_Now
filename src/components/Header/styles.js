import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints }) => ({
  header: {
    background: 'transparent',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    [breakpoints.up('sm')]: {
      padding: 20
    },
    [breakpoints.up('md')]: {
      padding: 40
    }
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      width: 220,
      [breakpoints.down('xs')]: {
        width: 180
      },
      [breakpoints.down(350)]: {
        width: 130
      }
    }
  },
  subtoolbar: {
    display: 'flex',
    alignItems: 'center',

    '& > button': {
      [breakpoints.down('xs')]: {
        padding: 6
      },
      '& > span > img': {
        width: 22,
        [breakpoints.down('md')]: {
          width: 28
        }
      }
    }
  },
  burger: {
    '& > span > svg': {
      color: ({ isLanding }) => (isLanding ? '#ffffff' : '#454857')
    }
  }
}))
