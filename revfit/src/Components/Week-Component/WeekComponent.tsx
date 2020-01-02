import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ScrollableTabsButtonAuto from '../Tab-Component/TabComponent';
import { Exam } from '../Youtubeexapl/ReactYoutubeExampleComponent';
import { MenuItem } from '@material-ui/core';

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
      <Router>
  <Typography>

    <Link to='/WorkOut '>Select Week</Link>
    
    </Typography>
    </Router>
  );
}