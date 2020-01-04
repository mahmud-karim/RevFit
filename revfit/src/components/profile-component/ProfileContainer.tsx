import { ProfileComponent } from "./ProfileComponent"
import { connect } from "react-redux"
import { IState } from "../../reducers"

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(ProfileComponent)