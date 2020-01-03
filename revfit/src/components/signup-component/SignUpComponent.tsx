import React, { SyntheticEvent } from 'react'
import { Container, Card, TextField, Button } from '@material-ui/core'

export class SignUpComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            updated: false,
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            weight: 0,
            height: 0,
            gender: '',
            startingWeight: 0,
            goalWeight: 0
        }
    }
    postUserId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    postUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    postFirstName = (e: any) => {
        this.setState({
            ...this.state,
            firstName: e.target.value
        })
    }
    postLastName = (e: any) => {
        this.setState({
            ...this.state,
            lastName: e.target.value
        })
    }
    postPassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    postWeight = (e: any) => {
        this.setState({
            ...this.state,
            weight: e.target.value
        })
    }
    postHeight = (e: any) => {
        this.setState({
            ...this.state,
            height: e.target.value
        })
    }
    postGender = (e: any) => {
        this.setState({
            ...this.state,
            gender: e.target.value
        })
    }
    postGoalWeight = (e: any) => {
        this.setState({
            ...this.state,
            goalWeight: e.target.value
        })
    }
    postStartingWeight = (e: any) => {
        this.setState({
            ...this.state,
            startingWeight: e.target.value
        })
    }
    postSignUp = async (e: SyntheticEvent) => {
        e.preventDefault()
        // try {
        //     //let u = await submitSignUp(this.state.username, this.state.password, this.state.weight, this.state.height, this.state.gender, this.state.goalWeight)
        //     if (u.status === 200) {
        //         this.setState({
        //             ...this.state,
        //             updated: true
        //         })
        //     } else {
        //         this.setState({
        //             ...this.state,
        //             updated: false
        //         })
        //     }
        // } catch (e) {
        //     console.log(e);

        // }


    }

    render() {
        let message = () => {
            if (this.state.updated) {
                return <p>SignUp Successful!</p>
            }
        }
        return (
            <div>
                <Container component="main" maxWidth="xs">

                    <Card>
                        <form onSubmit={this.postSignUp} noValidate autoComplete="off">
                        <TextField
                            value={this.state.username}
                            onChange={this.postUsername}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Username"
                            label="Username"
                            type="username"
                            id="username"
                        />
                        <TextField
                            value={this.state.password}
                            onChange={this.postPassword}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Password"
                            label="Password"
                            type="password"
                            id="password"
                        /> 
                        <TextField
                        value={this.state.firstName}
                        onChange={this.postFirstName}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="First Name"
                        label="First Name"
                        type="First Name"
                        id="First Name"
                    />
                     <TextField
                    value={this.state.lastName}
                    onChange={this.postLastName}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Last Name"
                    label="Last Name"
                    type="Last Name"
                    id="Last Name"
                />
                        <TextField
                            value={this.state.weight}
                            onChange={this.postWeight}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Weight"
                            label="Weight"
                            type="weight"
                            id="weight"
                        />
                        <TextField
                            value={this.state.height}
                            onChange={this.postHeight}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Height"
                            label="Height"
                            type="height"
                            id="height"
                        />
                        <TextField
                            value={this.state.gender}
                            onChange={this.postGender}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Gender"
                            label="Gender"
                            type="gender"
                            id="gender"
                        />
                        <TextField
                            value={this.state.goalWeight}
                            onChange={this.postGoalWeight}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Goal Weight"
                            label="Goal Weight"
                            type="goal weight"
                            id="goal weight"
                        />
                            <br />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="inherit"
                                className='{classes.submit}'
                            >
                                Post SignUp
                        </Button>
                        </form>
                        {message()}
                    </Card>
                </Container></div>
        )
    }
}