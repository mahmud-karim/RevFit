import React from './node_modules/react';
import { makeStyles, Theme } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Tabs from './node_modules/@material-ui/core/Tabs';
import Tab from './node_modules/@material-ui/core/Tab';
import Typography from './node_modules/@material-ui/core/Typography';
import Box from './node_modules/@material-ui/core/Box';
import { DaySix } from '../week-two-videos/DaySixComponent';
import { DaySeven } from '../week-two-videos/DaySevenComponent';
import { DayEight } from '../week-two-videos/DayEightComponent';
import { DayNine } from '../week-two-videos/DayNineComponent';
import { DayTen } from '../week-two-videos/DayTenComponent';







interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function WeekTwo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Day One" {...a11yProps(0)} />
          <Tab label="Day Two" {...a11yProps(1)} />
          <Tab label="Day Three" {...a11yProps(2)} />
          <Tab label="Day Four" {...a11yProps(3)} />
          <Tab label="Day Five" {...a11yProps(4)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <DaySix/> 
        <p className="test">Item One</p>            
      </TabPanel>
      <TabPanel value={value} index={1}>
     <DaySeven/>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
       <DayEight/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <DayNine/>
      </TabPanel>
      <TabPanel value={value} index={4}>
    <DayTen/>
      </TabPanel>
     
     
    </div>
  );
}