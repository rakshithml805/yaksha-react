import { createTheme, responsiveFontSizes } from "@mui/material";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

const theme = createTheme({
    typography: {
        htmlFontSize: 16,
        fontSize: 14,
        fontFamily: 'Poppins',
        h1: {
            fontSize: "23px",
            fontWeight: 400,
        },
        h2: {
            fontSize: "18px",
            fontWeight: 500,
        },
        h3: {
            fontSize: "15px",
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: "16px",
            fontWeight: 500,
        },
        body1: {
            fontSize: "14px",
        },
        body2: {
            fontSize: "15px",
            fontWeight: 500,
        },
        caption: {
            fontSize: "12px",
        },
        button: {
            textTransform: "capitalize",
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
        },
        text: {
            primary: "#404040",
            secondary: "#777777",
            disabled: "#AAAAAA",
            offwhite: "#9cb6e7",
            red: "#AC0521",
            white: "#FFF",
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'banner'},
                    style: {
                        border: "1px solid white",
                        color: "white",
                        backgroundColor: "#153776",
                        "-webkit-transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        "box-shadow": "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                        "&:Hover": {
                            border: "1px solid white",
                            color: "white",
                            backgroundColor: "#0b234f",
                        }
                    }
                },
                {
                    props: { variant: 'outlined'},
                    style: {
                        backgroundColor: "white",
                        "-webkit-transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        "box-shadow": "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                    }
                }
            ]
        },
        MuiChip: {
            variants:[
                {
                    props: {variant: 'skill'},
                    style: {
                        color: "#2e2e2e",
                        backgroundColor: "#ffffff85"
                    }
                }
            ]
        }
    }
});

export default responsiveFontSizes(theme);