import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ScrollableTabsButtonAuto from '../tab-component/WeekOneComponent';
import WeekTwo from '../tab-component/WeekTwoComponent';





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export default function Links() {
  const classes = useStyles();
  // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    
    <Typography className={classes.root}>
      
      <Link href="http://localhost:3000/WeekOne" >
      Week One  {ScrollableTabsButtonAuto}
      </Link>
      <Link href="http://localhost:3000/WeekTwo" >
      Week Two  {WeekTwo}
      </Link>
      
    </Typography>
  );
}
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Fade from '@material-ui/core/Fade';
// import { Link } from '@material-ui/core';
// import ScrollableTabsButtonAuto from '../Tab-Component/TabComponent';

// export default function FadeMenu() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
//         Open with fade transition
//       </Button>
//       <Menu
//         id="fade-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
       
//         <Link href="http://localhost:3000/WeekOne" >
//        Week One  {ScrollableTabsButtonAuto}
//        </Link>
        
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }