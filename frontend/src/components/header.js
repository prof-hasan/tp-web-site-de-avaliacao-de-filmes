// src/components/Header.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Avatar, IconButton, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-lvm2.svg';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: '100px',
    height: '100px',
    marginRight: 'auto',
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    marginTop: '20px',
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
    marginLeft: theme.spacing(10),
    transition: 'transform 0.2s ease-in-out',
    maxWidth: '100%',
    '&:hover': {
      transform: 'scale(1.10)',
    },
  },
  linkText: {
    fontSize: '20px',
  },
  login: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    marginRight: theme.spacing(2),
  },
  search: {
    marginRight: theme.spacing(2),
  },
  searchField: {
    marginRight: theme.spacing(2),
    width: '200px',
    '&:hover': {
      border: '1px solid white',
      borderRadius: theme.shape.borderRadius * 2,
    },
    '& fieldset': {
      border: '1px solid white',
      borderRadius: theme.shape.borderRadius * 2,
      opacity: 0.5,
    },
  },
  input: {
    color: 'white',
  }
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
          <Link to="/">
            <img src={logo} alt="Logo" className={classes.logo} />
          </Link>
          <div className={classes.navLinks}>
            <Link to="/" className={classes.link}>
              <Button color="inherit" className={classes.linkText}>Explorar</Button>
            </Link>
            <Link to="/movielisting" className={classes.link}>
              <Button color="inherit" className={classes.linkText}>Meus filmes</Button>
            </Link>
            <Link to="/" className={classes.link}>
              <Button color="inherit" className={classes.linkText}>Listas</Button>
            </Link>
            <Link to="/friends" className={classes.link}>
              <Button color="inherit" className={classes.linkText}>Amigos</Button>
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
                      <CloseIcon style={{ color: 'white' }} />
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
            <Link to="/login" className={classes.loginText}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/profile">
              <Avatar src="/broken-image.jpg" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Ensure content isn't hidden behind the AppBar */}
    </div>
  );
};

export default Header;
