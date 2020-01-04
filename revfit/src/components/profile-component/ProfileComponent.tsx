import { User } from "../../models/user";
import React from "react";
import { Container, Card, Typography } from "@material-ui/core";

interface IProfileComponentProps {
    user: User
}

export class ProfileComponent extends React.Component<IProfileComponentProps, any>{
    render() {
        return (
                <Container component="main" maxWidth="md" >
                    <Card>
                        <Typography variant="h4" gutterBottom>
                            Welcome User: {this.props.user.username}
                        </Typography>
                    </Card>
                    <Card >
                    <p>First name: {this.props.user.firstName}</p>
                    <p>Last name: {this.props.user.lastName}</p>
                    <p>Height: {this.props.user.height}</p>
                    <p>Weight: {this.props.user.weight}</p>
                    <p>Gender: {this.props.user.gender}</p>
                    <p>Starting Weight: {this.props.user.startingWeight}</p>
                    <p>Goal Weight : {this.props.user.goalWeight}</p>
                    <p>Weight to Lose: {this.props.user.weight-this.props.user.goalWeight}</p>
                    <p>Congrats! You've lost {this.props.user.startingWeight-this.props.user.weight} pounds!</p>
                </Card>
                </Container>
        )
    }
}