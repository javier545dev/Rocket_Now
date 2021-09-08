import { createTheme } from '@material-ui/core'
import overrides from './overrides'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#000000'
    }
  }
})

export default { ...theme, overrides }
