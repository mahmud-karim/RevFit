import React from "react";
import { store } from "../../Store";
import { User } from "../../models/user";
import { RouteComponentProps } from "react-router";
import Graph from "../graph-test-component/GraphComponent";
interface IUserProgressProps extends RouteComponentProps{
    user:User
}



export class UserOneProgressComponent extends React.Component<IUserProgressProps,any>{

constructor (props:any){
    super(props)
    this.state={
    userId:0
        }   
    }


    render(){

let x = this.props.user.userId

return(
    <div>

<Graph/>



    </div>
)

    }


}




   

   
