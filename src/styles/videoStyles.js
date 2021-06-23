import { makeStyles } from '@material-ui/core';
import { theme } from './theme';

export const videoStyles = makeStyles((theme) => ({
  likeButton: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 9999,
    borderColor: 'lightgray',
    width: 250
  },
  subscribeButton: {
    marginTop: theme.spacing(1),
    alignItems: 'center',
    display: 'flex',
    borderRadius: 9999,
    borderColor: 'lightgray',
    width: 250
  },
  thumbnail: {
    position: 'relative',
    display: 'flex',
    cursor: 'pointer',
    '&::before': {
      content: "attr(data-duration)",
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      color: '#fff',
      right: 5,
      bottom: 5,
      padding: '0.1rem 0.3rem',
      borderRadius: '0.3rem',
      fontSize: '0.9em'
    },
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.2'
    },
  },
  thumbnailImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#aaa',
    overflow: 'hidden'
  },
  thumbUpIconLiked: {
    color: 'blue'
  },
  unlikeButton: {
    marginTop: theme.spacing(1),
    color: 'blue',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 9999,
    width: 250
  },
  unsubscribeButton: {
    marginTop: theme.spacing(1),
    alignItems: 'center',
    color: 'red',
    borderRadius: 9999,
    display: 'flex',
    width: 250
  },
  unsubscribeIcon: {
    color: 'red'
  },
  videoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  videoTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    textDecoration: 'none',
    color: '#000'
  },
  videoDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '1rem'
  },
  videoChannelName: {
    color: '#555',
  },
  videoMetadata: {
    color: '#555'
  },
  videoSelected: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '3rem 1rem',
    padding: '3rem 1.5rem',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0
    }
  },
  videoSectionTitle: {
    gridColumn: '1 / -1',
    margin: '-0.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 0.5rem'
  },
  videoSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '3rem 1rem',
    padding: '3rem 1.5rem',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  youtubeIframe: {
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 200px)'
    },
    [theme.breakpoints.down('xs')]: {
    width: 'calc(100vw - 15%)',
    }
  }
}));