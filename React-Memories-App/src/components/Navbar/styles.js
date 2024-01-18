import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  imageLogo: {
    height: '40px',
    [theme.breakpoints.down('xs')]: {
      height: '20px',
    },
  },
  imageText: {
    marginRight: '10px',
    height: '45px',
    [theme.breakpoints.down('xs')]: {
      height: '30px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '10px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))
