import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppbarComponent from '../appbar-component/AppbarComponent';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import profileBg from '../../assests/images/liprofile.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export default function ProfileComponent(props: any) {


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [username, setUsername] = React.useState(props.user.username);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const updateUsername = (e: any) => {
        setUsername(e.target.value)
        console.log(username);
    }
    const updatePassword = () => {

    }
    const updateFirstname = () => {

    }
    const updateLastname = () => {

    }
    const updateWeight = () => {

    }
    const updateHeight = () => {

    }
    const updateGoalWeight = () => {

    }
    const submitUpdate = (e: any) => {
        e.preventDefault()
    }

    return (
        <Container component="main" maxWidth="md">
            <AppbarComponent />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center"  >
                        <Card className={classes.card}>
                            <CardHeader
                                title={props.user.firstname}
                            />
                            <CardMedia
                                className={classes.media}
                                image={profileBg} />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <form onSubmit={submitUpdate} className="updateComponent" noValidate autoComplete="off">
                                        <TextField value={username} onChange={updateUsername} label="Username" />
                                        <TextField value={props.user.password} onChange={updatePassword} label="Password" />
                                        <TextField value={props.user.firstname} onChange={updateFirstname} label="First Name" />
                                        <TextField value={props.user.lastname} onChange={updateLastname} label="Last Name" />
                                        <TextField value={props.user.weight} onChange={updateWeight} label="Weight" />
                                        <TextField value={props.user.height} onChange={updateHeight} label="Height" />
                                        <TextField value={props.user.gender} label="Gender" />
                                        <TextField value={props.user.goalWeight} onChange={updateGoalWeight} label="Goal Weight" />
                                        <br />
                                        <p> </p>
                                        <br />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className='{classes.submit}'
                                        >
                                            Update
                                        </Button>
                                    </form>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}