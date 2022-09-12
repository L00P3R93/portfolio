import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import React from "react";

function MyApp({Component, pageProps}){
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;