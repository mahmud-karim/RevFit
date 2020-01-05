import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FitnessCenterSharpIcon from '@material-ui/icons/FitnessCenterSharp';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Button } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            alignItems: 'center',
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(10),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    }),
);

export default function AppbarComponent() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (

        <div className={classes.root}>
            
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography variant="h6" noWrap>
                        RevFit
                    </Typography> */}
                    <Button component={Link} to="/home" color="secondary"className="appbar" startIcon={<HomeIcon />} >RevFit</Button>
                    <Button component={Link} to="/library" color="secondary" className="appbar" startIcon={<MenuBookIcon />} />
                    <Button component={Link} to="/progress" color="secondary" className="appbar" startIcon={<BarChartIcon />} />
                    <Button component={Link} to="/account" color="secondary" className="appbar" startIcon={<AccountBoxIcon />} />
                    <Button  href="/login" color="secondary" className="appbar" >Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Typography variant="h6" noWrap>
                    WorkOuts
                    </Typography>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />
                <List>
                    <ListItem button href="/weekone" onClick={() => {
                        console.log('clicked');
                        return <Redirect to="/weekone" />
                    }} >
                        <ListItemIcon>{6 % 2 === 0 ? <FitnessCenterSharpIcon /> : <FitnessCenterIcon />}</ListItemIcon>
                        <Link to="/weekone"> Week One</Link>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>{6 % 2 === 0 ? <FitnessCenterSharpIcon /> : <FitnessCenterIcon />}</ListItemIcon>
                        <Link to="/weektwo"> Week Two</Link>
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}