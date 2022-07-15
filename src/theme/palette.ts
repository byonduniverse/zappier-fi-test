declare module "@mui/material/styles" {
  interface Palette {}
  // allow configuration using `createTheme`
  interface PaletteOptions {}
}

const palette = {
  primary: {
    light: "#2C3A43",
    main: "#EEEEEE",
  },
  secondary: {
    light: "#6D639E",
    main: "#475CF6",
  },
  background: {
    paper: "#202a30",
    default: "#14101E",
  },
  divider: "#2C3A43",
  text: {
    primary: "#C7D2DA",
    secondary: "#EEEEEE",
  },
};

export default palette;
