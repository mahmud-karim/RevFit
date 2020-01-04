import React from "react";
import { User } from "../../models/user";
import { RouteComponentProps } from "react-router";
import Graph from "../graph-test-component/GraphComponent";
interface IUserProgressProps extends RouteComponentProps {
    user: User
}



export class ProgressComponent extends React.Component<IUserProgressProps, any>{

    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0
        }
    }


    render() {



        return (
            <div>



                <Graph />


            </div>
        )

    }


}







