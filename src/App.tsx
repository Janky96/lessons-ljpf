import './App.css'
import Home from 'pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7dcded',
      main: '#31708e',
      dark: '#4a9aba'
    },
    secondary: {
      light: '#869383',
      main: '#687864',
      dark: '#536050'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Lato"
    ].join(","),
    h3: {
      fontSize: '2.8rem'
    },
    h4: {
      fontSize: '2.2rem'
    },
    body1: {
      fontSize: '1.6rem'
    }
  }
},);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
