import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SideBar from '../sideBar/SideBar';
import MainIcon from '../../assets/MainIcon.png'
import { Link } from 'react-router-dom'


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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SideBar />
                    </IconButton>
                    <figture variant="h6" className={classes.title}>
                        <Link to='/'>
                            <img src={MainIcon} style={{ width: '10rem' }} />
                        </Link>
                    </figture>
                    <Link to='logout'>
                        <Button style={{ color: '#ee5c23' }}>Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}