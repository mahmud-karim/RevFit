import React from "react";
import { RouteComponentProps } from "react-router";
import Graph from "../graph-test-component/GraphComponent";
import AppbarComponent from "../appbar-component/AppbarComponent";
import { Container, Grid, Paper } from "@material-ui/core";

interface IUserProgressProps extends RouteComponentProps {
    userData: [[]]
}

export class ProgressComponent extends React.Component<IUserProgressProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0,
            userData: [[0, 10], [1, 2], [2, 10], [3, 2], [4, 7]]
        }
    }


    render() {
        return (
            <Container component="main" maxWidth="md">
                <AppbarComponent />
                <Grid container spacing={2}>
                    <Grid item xs={12} spacing={2}>
                        <Grid container justify="space-evenly" >
                            <Graph userData={this.state.userData} title="Miles Walked" />
                            <Graph userData={[[0, 100], [1, 105], [2, 110], [3, 100], [4, 109]]} title="Weight" />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}







