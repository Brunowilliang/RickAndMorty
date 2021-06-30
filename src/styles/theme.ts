import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  config: {
    // initialColorMode: "light",
    // useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#F0F2F5",
      },
    },
  },
  fonts:{
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Roboto, monospace',
  },
  fontWeight:{
    normal: 400,
    bold: 700,
  },
  radii:{
    md: '5px',
  },
  colors: {
    white: {
      500: '#FFFFFF',
      1000: 'rgba(255, 255, 255, 0.1)',
    },
    gray: {
      500: '#706E7A',
      700: '#585666',
    }

  }
})

export default theme;