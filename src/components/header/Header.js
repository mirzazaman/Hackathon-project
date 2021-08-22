import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SideBar from '../sideBar/SideBar';
import MainIcon from '../../assets/MainIcon.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

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
}));

export default function Header() {
    const isUserLogin = useSelector(store => store.AuthReducer.isUserLogin);
    const isRestLogin = useSelector(store => store.AuthReducer.isRestLogin);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SideBar />
                    </IconButton>
                    <figture variant="h6" className={classes.title}>
                        <Link to='/'>
                            <img src={MainIcon} style={{ width: '10rem' }} />
                        </Link>
                    </figture>
                    {
                        isUserLogin ?
                            <Link to='/userLogout'>
                                <Button style={{ color: '#030504' }}>Logout</Button>
                            </Link> :
                            <>
                                {
                                    isRestLogin ?
                                        <Link to='/restaurantLogout'>
                                            <Button style={{ color: '#030504' }}>Logout</Button>
                                        </Link> :
                                        <>
                                            <Link to='/userLogin'>
                                                <Button style={{ color: '#030504' }}>Login</Button>
                                            </Link>
                                            <Link to='/restaurantLogin'>
                                                <Button variant='' style={{ color: '#030504' }}>Restaurant Login</Button>
                                            </Link>
                                        </>
                                }
                            </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}