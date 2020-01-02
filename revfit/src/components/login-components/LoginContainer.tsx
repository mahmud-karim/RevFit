import { connect } from "react-redux";


  const mapStateToProps = (state: ) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)