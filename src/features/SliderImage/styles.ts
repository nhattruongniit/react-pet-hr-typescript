import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    '& img': {
      border: 'thin solid #ccc',
      width: '100%',
      height: '100%',
    },
  },
  imgContainer: {
    position: 'relative',
    '& button': {
      display: 'inline-block',
      width: '31px',
      height: '70px',
      opacity: 0.75,
      color: '#fff',
      background: '#999',
    },
    '& button svg': {
      fontSize: 30,
    },
  },
  btnPrev: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    zIndex: 3,
  },
  btnNext: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    zIndex: 3,
  },
  thumbnail: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '20px -5px 0',
    '& li': {
      position: 'relative',
      width: 70,
      margin: '0 5px 5px',
      cursor: 'pointer',
      padding: 0,
      listStyle: 'none',
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
  buttonNavigate: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    transform: 'translateY(-50%)',
    '& button': {
      display: 'inline-block',
      width: '31px',
      height: '70px',
      opacity: 0.75,
      color: '#fff',
      background: '#999',
    },
    '& button svg': {
      fontSize: 30,
    },
  },
  isActive: {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      border: '3px solid #555',
    },
    '& img': {},
  },
  imgZoom: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: '-105%',
    width: 500,
    height: 500,
    backgroundSize: ' 1500px 1500px',
    backgroundRepeat: 'no-repeat',
    border: 'thin solid #ccc',
  },
  areaZoom: {
    '& img': {
      height: 335
    },
    '& > div > div': {
      zIndex: 3,
    },

  },
  lens: {
    position: 'absolute',
    zIndex: 2,
    border: '1px solid #d4d4d4',
    width: 150,
    height: 150,
    opacity: 0.4,
    backgroundColor: '#fff',
  },
}));

export default useStyles;
