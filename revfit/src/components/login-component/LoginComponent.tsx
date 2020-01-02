import React, { SyntheticEvent } from 'react'
import { Typography, Link, Container, CssBaseline, TextField, FormControlLabel, Checkbox, Button, Grid, Box } from '@material-ui/core'
import { User } from '../../models/user'
//import { Link as Link2, Redirect } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {"Copyright © RevFit "}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

interface ILoginComponentProps {
    user: User
    revfitLogin: (u: string, p: string) => void
}

export class LoginComponent extends React.Component<ILoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
            invalid: ''
        }
    }
    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            await this.props.revfitLogin(this.state.username, this.state.password)
            this.setState({
                ...this.state,
                invalid: 'Login Failed Username or Password Wrong'
            })
        } catch (e) {

        }
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='{classes.paper}'>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={this.submitLogin} className='login' noValidate>
                        <TextField
                            value={this.state.username}
                            onChange={this.updateUsername}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            value={this.state.password}
                            onChange={this.updatePassword}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='loginButton'
                        >
                            Sign In
                        </Button>
                        <p>{this.state.invalid}</p>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
                <p>{this.props.user.username}</p>
            </Container>
        )
    }
}