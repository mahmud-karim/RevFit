import React from "react"
import { Container, Card, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel } from "@material-ui/core"
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
            allFoods: false,
            goal: 2720,
            intake: 0,
            exercise: 0
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

    checked = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            this.setState({
                ...this.state,
                intake: this.state.intake + Number(e.target.value)
            })
        } else {
            this.setState({
                ...this.state,
                intake: this.state.intake - Number(e.target.value)
            })
        }
    }

    render() {
        let rows = this.props.food.map((e) => {
            return <FormControlLabel control={<Checkbox value={e.calories} onChange={this.checked} key={"food" + e.FoodId} />} label={e.foodName} />
        })
        let result = this.state.goal - (this.state.intake + this.state.exercise)

        return (
            <Container component="main" maxWidth="md">
                <AppbarComponent />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Calories Remaining
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Goal: {this.state.goal} - Food: {this.state.intake} + Exercise: {this.state.exercise} = {result}
                    </Typography>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Breakfast
                    </Typography>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">Add</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl component="fieldset" className="formControl" >
                                <FormLabel component="legend">Foods</FormLabel>
                                <FormGroup>
                                    {rows}
                                </FormGroup>
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lunch
                    </Typography>
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
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Dinner
                    </Typography>
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
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
            </Container>
        )
    }
}