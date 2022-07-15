import { createTheme } from "@mui/material/styles";
import { createComponents } from "./components";
import palette from "./palette";

// const theme = createTheme({
//   palette,
//   typography: {
//     fontFamily: ['Be Vietnam Pro', 'Inter'].join(','),
//     h1: {
//       fontSize: '3rem',
//       fontWeight: 900,
//       lineHeight: '61px',
//     },
//     h2: {
//       fontSize: '2.25rem',
//       fontWeight: 700,
//       lineHeight: '46px',
//     },
//     h3: {
//       fontSize: '2rem',
//       fontWeight: 700,
//     },
//     h4: {
//       fontSize: '1.5rem',
//       fontWeight: 400,
//     },
//     h5: {
//       fontSize: '1.25rem',
//       fontWeight: 700,
//     },
//     subtitle1: {
//       fontSize: '1rem',
//       fontWeight: 500,
//       fontFamily: 'Inter',
//       lineHeight: '2rem',
//     },
//     subtitle2: {
//       fontSize: '0.875rem',
//       fontWeight: 700,
//       fontFamily: 'Inter',
//     },
//     button: {
//       textTransform: 'none',
//       fontSize: '1rem',
//       fontFamily: 'Inter',
//     },
//   },
//   components: createComponents(palette),
// })

const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Prompt", Arial, sans-serif',
    h6: {
      fontSize: "18px",
    },
  },
  components: createComponents(palette),
});

export default theme;
