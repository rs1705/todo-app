import * as actionTypes from "../actions/actionTypes";
import fire from "../../firebase";

const initialState = {
  authStatus: false,
  userId: null,
};

const userReducer = (state = initialState, action) => {
  let authState;
  let user;
  switch (action.type) {
    case actionTypes.AUTH_START: {
      console.log(action.id);
      fire
        .auth()
        .signInWithEmailAndPassword(action.id, action.pass)
        .then((response) => {
          authState = true;
          user = response.user.uid;
          console.log(response.user);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(state);
      return { ...state, authStatus: !state.authStatus, userId: user };
    }

    default:
      return state;
  }
};

export default userReducer;
