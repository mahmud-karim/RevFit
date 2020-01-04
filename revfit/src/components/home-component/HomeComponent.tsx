import React from "react"
import { Container, Card, Typography, Divider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button, Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AppbarComponent from "../appbar-component/AppbarComponent"
import { Food } from "../../models/food"

interface ILoginComponentProps {
    food: Food[]
    revfitFood: () => void
}


export class HomeComponent extends React.Component<ILoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            allFoods: false
        }
    }

    async componentDidMount() {
        try {
            await this.props.revfitFood()
            if (this.props.food) {
                this.setState({
                    ...this.state,
                    allFoods: true
                })
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        let rows = this.props.food.map((e) => {
            return <FormControlLabel control={<Checkbox value={e.foodName} key={"food" + e.FoodId} />} label={e.foodName} />
        })

        return (
            <Container component="main" maxWidth="md">
                <AppbarComponent />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Calories Remaining
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Goal: 2,720 - Food: 0 + Exercise: 0 = 2720
                    </Typography>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Breakfast
                    </Typography>
                    <Divider />
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">Add</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl component="fieldset" className="formControl">
                                <FormLabel component="legend">Foods</FormLabel>
                                <FormGroup>
                                    {rows}
                                </FormGroup>
                                <Button>Submit</Button>
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lunch
                    </Typography>
                    <Divider />
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">Add</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl component="fieldset" className="formControl">
                                <FormLabel component="legend">Foods</FormLabel>
                                <FormGroup>
                                    {rows}
                                </FormGroup>
                                <Button>Submit</Button>
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Dinner
                    </Typography>
                    <Divider />
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">Add</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl component="fieldset" className="formControl">
                                <FormLabel component="legend">Foods</FormLabel>
                                <FormGroup>
                                    {rows}
                                </FormGroup>
                                <Button>Submit</Button>
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
            </Container>
        )
    }
}