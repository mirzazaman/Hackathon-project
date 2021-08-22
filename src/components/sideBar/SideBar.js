import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SimpleIcon from '../../assets/SimpleIcon.png'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SideBar() {
    const classes = useStyles();
    const [state, setState] = useState({ left: false });
    const isUserLogin = useSelector(store => store.AuthReducer.isUserLogin)
    const isRestLogin = useSelector(store => store.AuthReducer.isRestLogin)
    console.log('Admin state', isRestLogin);
    console.log('User state', isUserLogin);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <img src={SimpleIcon} style={{ width: 250, height: 'auto' }} />

            <List>
                <Link to='/'>
                    <ListItem button>
                        <ListItemIcon><FormatListBulletedIcon style={{ color: '#291C25' }} /></ListItemIcon>
                        <ListItemText primary={'Restaurants'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            {
                isRestLogin ?
                    <>
                        <List>
                            <Link to='/addDish'>
                                <ListItem button>
                                    <ListItemIcon><ExitToAppIcon style={{ color: '#291C25' }} /></ListItemIcon>
                                    <ListItemText primary={'Add Dish'} />
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                        <List>
                            <Link to='/restaurantLogout'>
                                <ListItem button>
                                    <ListItemIcon><ExitToAppIcon style={{ color: '#291C25' }} /></ListItemIcon>
                                    <ListItemText primary={'Restaurant Logout'} />
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                    </> :
                    <List>
                        <Link to='/restaurantLogin'>
                            <ListItem button>
                                <ListItemIcon><PersonIcon style={{ color: '#291C25' }} /></ListItemIcon>
                                <ListItemText primary={'Restaurant Login'} />
                            </ListItem>
                        </Link>
                        <Link to='/restaurantSignup'>
                            <ListItem button>
                                <ListItemIcon><PersonAddIcon style={{ color: '#291C25' }} /></ListItemIcon>
                                <ListItemText primary={'Restaurant Signup'} />
                            </ListItem>
                        </Link>
                    </List>
            }
            {
                isUserLogin ?
                    <>
                        {
                            isRestLogin ?
                                null :
                                <>
                                    <List>
                                        <Link to='/userLogout'>
                                            <ListItem button>
                                                <ListItemIcon><ExitToAppIcon style={{ color: '#291C25' }} /></ListItemIcon>
                                                <ListItemText primary={'Logout'} />
                                            </ListItem>
                                        </Link>
                                    </List>
                                    <Divider />
                                </>
                        }
                    </>
                    :
                    <>
                        {
                            isRestLogin ? null :
                                <>
                                    <List>
                                        <Link to='/userLogin'>
                                            <ListItem button>
                                                <ListItemIcon><PersonIcon style={{ color: '#291C25' }} /></ListItemIcon>
                                                <ListItemText primary={'Login'} />
                                            </ListItem>
                                        </Link>
                                        <Link to='/userSignup'>
                                            <ListItem button>
                                                <ListItemIcon><PersonAddIcon style={{ color: '#291C25' }} /></ListItemIcon>
                                                <ListItemText primary={'Signup'} />
                                            </ListItem>
                                        </Link>
                                    </List>
                                    <Divider />
                                </>
                        }
                    </>
            }
        </div>
    );

    return (
        <div>
            <React.Fragment key='left'>
                <MenuIcon style={{ color: '#030504' }} onClick={toggleDrawer('left', true)} />
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
