import * as actionTypes from "./actionTypes";

export const authStart=(id,pass)=>{
  return {
    type:actionTypes.AUTH_START,
    id: id,
    pass:pass
  }
};