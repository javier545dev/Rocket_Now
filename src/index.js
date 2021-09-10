import ReactDOM from 'react-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import { GlobalProvider } from './contexts'

import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
