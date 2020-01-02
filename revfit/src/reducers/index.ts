import { combineReducers } from "redux";

//this file will contain the type definitions for our store
//there will be many interfaces, that contain what each chunk of store should have
//there will be a special function called combine reducers
//this function will take all of the individual reducers and turn them into one super reducer

//this is specifically, the state from the login component
//other things will be able to use it, but it is under the nme of login
export interface ILoginState {

}

export interface IUserState {

}


//will be the typing of our entire global state
export interface IState {

}

//this will combine all of our reducers
//and make sure they fufill the state required by IState
export const state = combineReducers<IState>({

})