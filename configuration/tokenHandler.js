import { initStore } from "../redux/configureStore";
let dummyToken = "hello"
// console.log('=======================================',token)

export const getToken = async () => {
  let token = await initStore()?.getState()?.AuthReducer?.user.access_token;
  
  return token ;
};



// export const GetToken = () => {
//   return <span>token testing</span>;
// };
