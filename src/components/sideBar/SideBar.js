import React from 'react';
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
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom'


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
    const [state, setState] = React.useState({
        left: false,
    });

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
            <List style={{ backgroundColor: "#ee5c23" }}>
                <center>
                    <img src={SimpleIcon} style={{ width: 150 }} />
                </center>
            </List>
            <Divider />
            <List>
                <Link to='/'>
                    <ListItem button>
                        <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
                        <ListItemText primary={'Tasks'} />
                    </ListItem>
                </Link>
                <Link to='/addtask'>
                    <ListItem button>
                        <ListItemIcon><AddBoxOutlinedIcon /></ListItemIcon>
                        <ListItemText primary={'Add Task'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to='/login'>
                    <ListItem button>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary={'Login'} />
                    </ListItem>
                </Link>
                <Link to='/signup'>
                    <ListItem button>
                        <ListItemIcon><PersonAddIcon /></ListItemIcon>
                        <ListItemText primary={'Signup'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to='/logout'>
                    <ListItem button>
                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key='left'>
                <MenuIcon style={{ color: '#ee5c23' }} onClick={toggleDrawer('left', true)} />
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
