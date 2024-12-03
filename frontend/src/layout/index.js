import React from 'react';
import { Outlet } from 'react-router-dom';
import fundo from "../assets/Fundo.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(12,2,60,1)', // Cor de fundo de backup
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    minWidth: '100vw',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const LoggedLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  );
};

export default LoggedLayout;
