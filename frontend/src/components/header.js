// src/components/Header.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Avatar, IconButton, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-lvm3.svg';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: '100px',
    height: '100px',
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    minHeight: '64px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: theme.spacing(2),
  },
  login: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    marginRight: theme.spacing(2),
  },
  searchField: {
    marginRight: theme.spacing(2),
    width: '200px',
  },
  input: {
    color: 'white',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <img src={logo} alt="Logo" className={classes.logo} />
          </Link>
          <div className={classes.navLinks}>
            <Link to="/" className={classes.link}>
              <Button color="inherit">Explorar</Button>
            </Link>
            <Link to="/movielisting" className={classes.link}>
              <Button color="inherit">Meus filmes</Button>
            </Link>
            <Link to="/" className={classes.link}>
              <Button color="inherit">Listas</Button>
            </Link>
            <Link to="/" className={classes.link}>
              <Button color="inherit">Amigos</Button>
            </Link>
          </div>
          <div className={classes.login}>
            {isSearchOpen && (
              <TextField
                className={classes.searchField}
                variant="outlined"
                placeholder="Buscar..."
                InputProps={{
                  classes: { input: classes.input },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setIsSearchOpen(false)}>
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                autoFocus
              />
            )}
            <IconButton className={classes.search} color="inherit" onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
            <Button color="inherit">Login</Button>
            <Avatar src="/broken-image.jpg" />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Ensure content isn't hidden behind the AppBar */}
    </div>
  );
};

export default Header;
