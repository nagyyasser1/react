import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import memoriesLogo from '../../images/memories-Logo.png'
import memoriesText from '../../images/memories-Text.png'
import { useDispatch } from 'react-redux'
import { Logout } from '../../store/authSlice'
import { useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

function Navbar() {
  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(Logout())
        history.push('/')
        setUser(null)
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to={'/'} className={classes.brandContainer}>
        <img className={classes.imageText} src={memoriesText} alt="Icon" />
        <img className={classes.imageLogo} src={memoriesLogo} alt="memories" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            {/* <Typography className={classes.userName} variant="h6" >
              {user.result.name}
            </Typography> */}
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={() => {
                dispatch(Logout())
                history.push('/')
                setUser(null)
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
