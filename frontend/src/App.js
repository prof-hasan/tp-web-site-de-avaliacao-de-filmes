import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import LoggedLayout from './layout';
import Login from './pages/login';
import Home from './pages/home';
import MovieListing from './pages/movieListing'

function App() {
    const theme = createTheme({
        palette: {
            type: "light",
            primary: { main: "#4600C0" },
            secondary: { main: "#F28D35" },
            textPrimary: "#FFFFFF",
            background: "#4600C0",
            borderPrimary: "#174873",
            light: "#1FA634",
            colorHeader: "#174873",
            icons: "#F28D35"
        },
        typography: {
            fontFamily: [
                'Poppins',
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route element={<LoggedLayout />}>
                        <Route path="/movieListing" element={<MovieListing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
