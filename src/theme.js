import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: '#153776'
        },
        secondary: {
            main: '#CBD2DC'
        },
        success: {
            main: '#4CAF50'
        },
        warning: {
            main: '#FF9D00'
        },
        error: {
            main: '#AC0521'
        }
    },
});

export default responsiveFontSizes(theme);