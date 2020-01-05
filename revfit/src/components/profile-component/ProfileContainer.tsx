import { IState } from "../../reducers";
import { connect } from "react-redux";
import ProfileComponent from "./ProfileComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(ProfileComponent)