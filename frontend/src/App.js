import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import LoggedLayout from './layout';
import Login from './pages/login';
import Home from './pages/home';
import MovieListing from './pages/movieListing';
import MovieInfo from './pages/movieInfos';
import Friends from './pages/friends';
import FriendProfile from './pages/friendProfile';
import Playlist from './pages/playlists';
import Signin from './pages/signin';
import Profile from './pages/profile';

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
                'Urbanist',
                'sans-serif', // Adicione uma fonte fallback
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
                        <Route path="/movieInfo" element={<MovieInfo />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/friendProfile" element={<FriendProfile />} />
                        <Route path="/playlists" element={<Playlist />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
