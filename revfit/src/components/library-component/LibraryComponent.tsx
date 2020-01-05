import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Grid } from '@material-ui/core';
import AppbarComponent from '../appbar-component/AppbarComponent';
import test from '../../assests/images/paella.png';
import chicken from '../../assests/images/chicken_Marsala.png'
import turemeric from '../../assests/images/turemeric.png'
import crabs from '../../assests/images/crabs.png'

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

export function LibraryComponent() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);

    };

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };
    return (

        <Container component="main" maxWidth="md">
            <AppbarComponent />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="space-evenly"  >
                        <Grid>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        S
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={test}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
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
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                        </Grid>

                        <Grid>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        C
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Chicken Marsala"
                                subheader="May 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={chicken}
                                title="Chicken"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Italian Chicken Marsala is simple, flavorful and quick to prepare. Golden, pan-fried chicken breasts are smothered in a delicious pan sauce made with shallots,
                                     Marsala, dark chicken stock and a tiny bit of butter.
                            </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded1,
                                    })}
                                    onClick={handleExpandClick1}
                                    aria-expanded={expanded1}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Step 1: Preparing the Chicken
                                        • 3 to 4 boneless, skinless chicken breasts
                                        • kosher salt (to taste)
                                        • freshly ground black pepper (to taste)
                                        Method
                                        To prepare the chicken, first slice each breast into 2 or 3 equal pieces. You can keep them whole, but this will make for shorter cooking times. Season both sides with salt and freshly ground pepper to taste. Set aside.

                                        Step 2: Cooking the Chicken
                                        • 2 tsp grapeseed oil (approx.)
                                        • 3 tbsp shallots
                                        • 1/2 cup Marsala wine
                                        • 1 cup Dark Chicken Stock (on Rouxbe)
                                        • 2 tbsp unsalted butter
                                        Method
                                        Before you start cooking, be sure to mince the shallots and measure out the Marsala, chicken stock (see recipe link below) and butter.

                                        Preheat a pan over medium to medium-high heat. Once the pan is properly heated, add the oil, followed by the chicken. Let the chicken cook until golden underneath. Flip over and continue to cook on the other side. Once the chicken has just cooked through, place it onto a cooling rack, loosely tent with foil and let rest while you fry the second batch. Add a touch more oil if the pan seems too dry. Once the second batch has cooked, transfer it to the cooling rack to let rest while you make the sauce.
                                    </Typography>
                                    <Typography paragraph>
                                        Step 3: Making the Sauce
                                        • grapeseed oil (if needed)
                                        • kosher salt (to taste)
                                        Method
                                        To make the sauce, first make sure the sucs have not burned. Add a touch more oil if needed, followed by the shallots. Let the shallots cook until soft and translucent.

                                        Next, deglaze with the Marsala. Scrape the bottom of the pan to incorporate the sucs and let the wine reduce until almost all of the liquid has evaporated.

                                        Next, add the dark chicken stock. Bring it to a simmer and let it reduce by about half. Add any juices from the resting chicken. Let the liquid reduce until you reach a sauce-like consistency.

                                        To finish the sauce, swirl in the cold butter and taste for seasoning. Depending on the type of stock you have used, you may need to season with a bit of salt and pepper.


                                    </Typography>
                                    <Typography>
                                        Step 4: Serving the Dish
                                        • 1 lemon
                                        • 1/4 cup Italian flat-leaf parsley
                                        Method
                                        To finish the dish, roughly chop the parsley and cut the lemon in half.

                                        To serve the chicken, place it back into the pan, turning it to coat it in the sauce. If the sauce looks a bit too thick, add a touch of water or stock to thin it out.

                                        Once the chicken has heated through and is nicely coated with the sauce, add some chopped parsley and a squeeze of fresh lemon.

                                        Plate individually or serve family style with the sauce drizzled over top.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

            <br/>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="space-evenly"  >

                    <Grid>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        P
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Perfect Crab-Stuffed Mushrooms"
                                subheader="Dec 12, 2019"
                            />
                            <CardMedia
                                className={classes.media}
                                image={crabs}
                                title="Chicken"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                These little goodies are the perfect addition to your next holiday gathering or even the perfect appetizer to serve before a cozy dinner at home. Everyone will be dazzled by every delicious bite (they won't be able to keep their hands off of them!) You can smile while you think of how easy they were to toss together! And the best part -
                                 I usually end up with leftover stuffing, which freezes beautifully until the next carry-in!
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded2,
                                    })}
                                    onClick={handleExpandClick2}
                                    aria-expanded={expanded2}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Cooking time: 20 minutes
                                        Preheat oven to 400 degrees F (200 degrees C).
                                        Melt 2 tablespoons butter in a skillet; cook and stir green onion until softened, about 2 minutes. Transfer green onion to a bowl. Stir in crabmeat, bread crumbs, 1/4 cup Monterey Jack cheese, egg, lemon juice, and dill weed until well mixed.
                                        Pour 1/2 cup melted butter in a 9x13-inch baking dish; turn mushroom caps in butter to coat. Fill mushroom caps with the crab mixture and sprinkle with remaining 1/2 cup Monterey Jack cheese. Pour white wine into baking dish.
                                        Bake in preheated oven until cheese is melted and lightly brown, 15 to 20 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                    er Serving: 329 calories; 25.4 g fat; 11.1 g carbohydrates; 14.5 g protein; 112 mg cholesterol; 381 mg sodium
            
                                    </Typography>
                                    <Typography>
                                      
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>






                    <Grid>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        T
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Turmeric sunshine coconut stew"
                                subheader="Jan 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={turemeric}
                                title="Chicken"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    For those days when only a big, smug bowl of virtuous sunshine will do, this recipe has got you covered.
                                    Adapt it with other vegetables as you see fit – butternut squash, pumpkin or a waxy potato will all add substance.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded3,
                                    })}
                                    onClick={handleExpandClick3}
                                    aria-expanded={expanded3}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Cooking time: 30 minutes
                                        Serves 4
                                        2 tbsp olive oil
                                        1 large onion, finely chopped
                                        3 garlic cloves, finely chopped
                                        1 red chilli, finely chopped
                                        1 tsp ground turmeric (or a thumb-sized piece of fresh turmeric, finely chopped)
                                        1 tbsp curry powder
                                        2 large sweet potatoes, diced
                                        400ml vegetable stock
                                    </Typography>
                                    <Typography paragraph>
                                        Step 1: Preparing the Chicken
                                        For those days when only a big, smug bowl of virtuous sunshine will do, this recipe has got you covered. Adapt it with other vegetables as you see fit – butternut squash, pumpkin or a waxy potato will all add substance.
            
                                        Place a large pan over a medium heat and add the oil. Add the onion, season with salt and pepper and fry for 6-8 minutes until tender.
            
                                        Add the garlic, chilli, turmeric and curry powder and fry for a further 2 minutes until the spices release their aroma.
            
                                        Add the sweet potato chunks and stir until coated in the spices, then pour in the vegetable stock, coconut milk and chickpeas. Bring back to a steady simmer and cook for 15 minutes or until the sweet potato is just tender.
            
                                        Check the seasoning and stir through the lime juice and coriander. Serve in deep bowls.
            
                                    </Typography>
                                    <Typography>
                                        Step 4: Serving the Dish
                                        • 1 lemon
                                        • 1/4 cup Italian flat-leaf parsley
                                        Method
                                        To finish the dish, roughly chop the parsley and cut the lemon in half.
            
                                        To serve the chicken, place it back into the pan, turning it to coat it in the sauce. If the sauce looks a bit too thick, add a touch of water or stock to thin it out.
            
                                        Once the chicken has heated through and is nicely coated with the sauce, add some chopped parsley and a squeeze of fresh lemon.
            
                                        Plate individually or serve family style with the sauce drizzled over top.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                    </Grid>
                </Grid>
            </Grid>



        </Container>



    );
}