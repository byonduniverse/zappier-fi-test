import { PaletteOptions } from "@mui/material/styles";

export const createComponents = (palette: PaletteOptions) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderColor: "#2c3a43",
        borderRadius: "20px",
        fontSize: "16px",
        minWidth: 0,
        "text-transform": "none",
      },
      sizeSmall: {
        fontSize: "14px",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontSize: "16px",
        "text-transform": "none",
      },
    },
  },
});
