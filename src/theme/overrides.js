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
  MuiOutlinedInput: {
    root: {
      color: 'white',
      borderRadius: 25
    },
    input: {
      padding: '16.5px 14px'
    }
  },
  MuiInputLabel: {
    root: {
      padding: '0px 0px 0px 7px',
      color: 'white'
    }
  },

  MuiCssBaseline: {
    '@global': {
      ...globalResets
    }
  }
}
