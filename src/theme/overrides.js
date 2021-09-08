import globalResets from './globalResets'
export default {
  MuiButton: {
    root: {
      borderRadius: 100,
      fontSize: 16,
      fontWeight: 500
    },
    contained: {
      boxShadow: 'none',

      '&:hover': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      }
    },
    label: {
      textTransform: 'initial'
    },
    outlined: {
      border: 'solid 1px #fff'
    }
  },
  MuiCssBaseline: {
    '@global': {
      ...globalResets
    }
  }
}
