import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  popper: {
    zIndex: 2000,
    border: 0,
    width: '100%',
    height: 'calc(100vh - 80px)',
    transform: 'translate3d(0px, 80px, 0px) !important',
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginRight: 8,
      marginTop: '-1.7em',
      '&::before': {
        transformOrigin: '0 100%'
      }
    }
  },
  // Stolen from https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Tooltip/Tooltip.js
  arrow: {
    overflow: 'hidden',
    position: 'absolute',
    width: '2.5em',
    height: '1.77em' /* = width / sqrt(2) = (length of the hypotenuse) */,
    boxSizing: 'border-box',
    color: '#454857',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)'
    }
  },
  popoverRoot: {
    backgroundColor: '#454857',
    height: '100%'
  },
  content: {
    padding: theme.spacing(2)
  }
}))
