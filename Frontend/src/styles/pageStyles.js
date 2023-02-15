import { makeStyles } from '@material-ui/core';
import { sideBarWidth, sideBarWidthXs } from '@constants';

export const pageStyles = makeStyles((theme) => ({
  youtubeContainer: {
    backgroundColor: theme.palette.background.main,
    height: '100%'
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    float: 'left',
    height: 'calc(100vh - 104px)',
    width: '100vw',
    overflowX: 'hidden'
  },
  pageContent: {
    // display: 'column',
    width: '100vw'
  },
  pageInnerContent: {
    margin: '16px 0',
    padding: 16,
    backgroundColor: theme.palette.background.main
  },
  subscriptionList: {
    margin: '16px 0',
    padding: 16
  },
  videos: {
    display: 'column',
    width: `calc(100% - ${sideBarWidth})`,
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${sideBarWidthXs})`,
    }
  },
  videoSection: {
    display: 'grid',
    gap: '3rem 1rem',
    padding: '3rem 1.5rem',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    [theme.breakpoints.down('xs')]: {
      gap: '0 1rem',
      paddingLeft: 0
    }
  }
}));