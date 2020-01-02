import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ScrollableTabsButtonAuto from '../Tab-Component/TabComponent';

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
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href="http://localhost:3000/WeekOne" >
      Week One  {ScrollableTabsButtonAuto}
      </Link>
      <Link href="http://localhost:3000/WorkOut" >
      Week Two  {ScrollableTabsButtonAuto}
      </Link>
      
    </Typography>
  );
}