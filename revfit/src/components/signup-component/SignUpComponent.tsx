import React, { SyntheticEvent } from 'react'
import { Container, Card, TextField, Button } from '@material-ui/core'
import { submitSignUp } from '../../remote/signup-clients/signup'

export class SignUpComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            updated: false,
            userId: 0,
            username: '',
            password: '',
            weight: 0,
            height: 0,
            gender: '',
            startingWeight: 0,
            goalWeight: 0,
            dailyCalories: 0,
            caloriesUsed: 0,
            caloriesBurned: 0
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
        try {
            let u = await submitSignUp(this.state.username, this.state.password, this.state.weight, this.state.height, this.state.gender, this.state.goalWeight)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    updated: true
                })
            } else {
                this.setState({
                    ...this.state,
                    updated: false
                })
            }
        } catch (e) {
            console.log(e);

        }


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
                        <TextField value={this.state.goalWeight} onChange={this.postGoalWeight} />
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