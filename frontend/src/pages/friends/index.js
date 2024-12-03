import React, { useState, useEffect } from 'react';
import { CssBaseline, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../../components/header";
import FriendCard from '../../components/friendCard';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 5,
    textTransform: 'none',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.10)',
    },
  },
  buttonShowMore: {
    background: '#FCA600',
    color: 'white',
    border: '3px solid #FCA600',
    '&:hover': {
      background: 'white',
      color: '#FCA600',
    },
  },
  buttonShowLess: {
    background: 'white',
    color: '#FCA600',
    border: '3px solid #FCA600',
    '&:hover': {
      background: '#FCA600',
      color: 'white',
    },
  },
}));

const Friends = () => {
  const classes = useStyles();
  const [showAll, setShowAll] = useState(false);
  const { getUsers } = useAuth();
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getUsers();
    if (loggedInUser) {
      const newData = data.filter(item => item && item.id !== loggedInUser.id)
      setFriends(newData);
    } else {
      setFriends(data)
    }
  };

  const displayedFriends = showAll ? friends : friends.slice(0, 4);

  const handleToggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  const handleCardClick = (friend) => {
    navigate(`../friendProfile`, { state: { friend } });
  };


  return (
    <div className={classes.root}>
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.container}>
          {displayedFriends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} onClick={handleCardClick} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Friends;
