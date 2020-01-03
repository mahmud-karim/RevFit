import React from "react"
import { Container, Card, Typography, Divider, Button } from "@material-ui/core"
import AppbarComponent from "../appbar-component/AppbarComponent"

export class HomeComponent extends React.Component<any, any>{

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