import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BookIcon from '@material-ui/icons/Book';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function NavComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Diary" icon={<BookIcon />} />
            <BottomNavigationAction label="Recipes" icon={<MenuBookIcon />} />
            <BottomNavigationAction label="Progress" icon={<BarChartIcon />} />
            <BottomNavigationAction label="Me" icon={<AccountBoxIcon />} />
        </BottomNavigation>
    );
}