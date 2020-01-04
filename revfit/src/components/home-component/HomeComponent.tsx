import React from "react"
import { Container, Card, Typography, Divider, Button } from "@material-ui/core"
import AppbarComponent from "../appbar-component/AppbarComponent"
import { Food } from "../../models/food"

interface ILoginComponentProps {
    food: Food[]
    revfitFood: () => void
}


export class HomeComponent extends React.Component<ILoginComponentProps, any>{


    async componentDidMount() {
        try {
            await this.props.revfitFood()
        } catch (e) {
            console.log(e);
        }
    }

    render() {
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
                    <Button>Add</Button>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lunch
                    </Typography>
                </Card>
                <br />
                <Card>
                    <Typography gutterBottom variant="h5" component="h2">
                        Dinner
                    </Typography>
                </Card>
            </Container>
        )
    }
}