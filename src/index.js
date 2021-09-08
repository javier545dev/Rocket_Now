import ReactDOM from 'react-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
