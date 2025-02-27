// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { GiWhiteBook } from 'react-icons/gi';

const breakpoints = {
    sm: "480px",
    md: "650px",
    lg: "750px",
    xl: "1200px",
    "2xl": "1536px",
  };
const styles = {
  global: (props) =>({
    "html, body": {
      border: "solid red",
      bg: props.colorMode === 'dark' ? "to bottom, #6ec4e8, #001517)": "linear-gradient(to bottom, #46596661 80%, #6ec4e8)",
      // bg: mode("linear-gradient(to bottom, #6ec4e8, #001517)", "linear-gradient(to bottom, #46596661 80%, #6ec4e8)")(props),
      "pre code": {
        // display: inline-block;
        width:"auto",
        overflowX: "auto"
      },
      "pre": {
        width:"auto"
      },
    }
  }
  )
}

//   const theme = extendTheme({ breakpoints,fonts: {
//     logo: `'Times New Roman', Times, sans-serif`,
//   },
//     config: {
//       initialColorMode: 'dark',
//       useSystemColorMode: false,
//     }
//   });


// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ breakpoints,fonts: {
    logo: `'Times New Roman', Times, sans-serif`,
  }, config,styles })

export default theme
