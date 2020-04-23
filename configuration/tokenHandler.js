import { initStore } from "../redux/configureStore";
let dummyToken = "hello"
let token = initStore()?.getState()?.AuthReducer?.user.access_token;

export const getToken = () => {
  return token ? token : dummyToken;
};



export const GetToken = () => {
  return <span>token testing</span>;
};
