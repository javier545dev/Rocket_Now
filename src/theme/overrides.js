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
    },
    multiline: {
      background: 'white'
    }
  },
  MuiInputLabel: {
    root: {
      padding: '0px 0px 0px 5px',
      color: 'white'
    },
    filled: {
      color: 'black'
    }
  },
  MuiFilledInput: {
    root: {
      padding: '0px 0px 0px 7px',
      color: 'white',
      blackground: 'white',
      '&:hover': {
        background: 'white'
      },
      input: {
        background: 'white'
      }
    },
    inputMultiline: {
      color: '#454857'
    },
    multiline: {
      color: '#454857',
      background: 'white',
      borderRadius: 10,
      boxShadow: '0px 3px 7px 0px rgba(0,0,0,0.49)',
      '&:hover': {
        background: 'white'
      }
    },
    colorSecundary: {
      background: 'white'
    }
  },
  MuiFormLabel: {
    disabled: {
      color: 'white'
    }
  },
  MuiInputBase: {
    input: {
      color: 'white'
    }
  },
  MuiFormHelperText: {
    root: {
      color: 'white'
    }
  },
  MuiCssBaseline: {
    '@global': {
      ...globalResets
    }
  }
}
