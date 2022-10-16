import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0680fc',
    },
    secondary: {
      main: '#2300ff',
    },
    text: {
      primary: '#f6f6f6',
    },
    background: {
      default: '#0B0F2E',
      paper: '#04001e',
    },
  },
  typography: {
    button: {
      color: '#f6f6f6',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#05101c',
          color: '#f6f6f6',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          // backgroundColor: '#05101c',
          color: '#f6f6f6',
          '&.Mui-selected': {
            color: '#0680fc',
          },
        },
      },
    },
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
  },
  spacing: 8,
});

export default theme;
