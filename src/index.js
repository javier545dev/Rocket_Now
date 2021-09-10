import ReactDOM from 'react-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
