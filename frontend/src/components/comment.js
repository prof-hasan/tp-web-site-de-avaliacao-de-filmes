// CommentCard.js
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  commentCard: {
    marginTop: '50px',
    display: 'flex',
    backgroundColor: '#150B60',
    color: '#f8f8f2',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    boxShadow: '0 4px 8px rgba(0, 2, 0, 0.5)', // Adicionando sombra
  },
  userSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  },
  userIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  username: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  commentContent: {
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  commentText: {
    marginTop: '10px',
  },
  rating: {
    marginTop: '10px',
  },
}));

const CommentCard = ({ username, comment, profileImageUrl, rating }) => {
  const classes = useStyles();

  return (
    <div className={classes.commentCard}>
      <div className={classes.userSection}>
        <img src={profileImageUrl} alt={`${username} profile`} className={classes.userIcon} />
        <div className={classes.username}>{username}</div>
      </div>
      <div className={classes.commentContent}>
        <div className={classes.commentText}>{comment}</div>
        <Box className={classes.rating}>
          {Array.from({ length: 5 }).map((_, index) =>
            index < rating ? (
              <StarIcon key={index} style={{ color: '#ffc107' }} />
            ) : (
              <StarBorderIcon key={index} style={{ color: '#ffc107' }} />
            )
          )}
        </Box>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  profileImageUrl: PropTypes.string.isRequired,
};

export default CommentCard;
