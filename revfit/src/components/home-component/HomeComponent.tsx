import React from "react"
import NavbarComponent from "../navbar-component/NavbarComponent"
import { Container } from "@material-ui/core"

export class HomeComponent extends React.Component<any, any>{

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <NavbarComponent />
            </Container>
        )
    }
}