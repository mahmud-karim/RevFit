import { IState } from "../../reducers";
import { revfitFood } from "../../action-mappers/food-action-mapper"
import { connect } from "react-redux";
import { HomeComponent } from "./HomeComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.food.food
    }
}

const mapDispatchToProps = {
    revfitFood
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)