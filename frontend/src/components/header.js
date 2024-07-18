// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logo-lvm3.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            MyApp
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
 