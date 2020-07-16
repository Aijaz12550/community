import { addResidents, residentsError } from "../actions";
// import { _axios } from "$config";
import axios from "axios";

export const residents = ( { Authorization, communityId } ) => {
  return async ( dispatch ) => {
    await axios
      .post( "ec2-18-218-60-110.us-east-2.compute.amazonaws.com:4000", {
        method: "GET",
        url: `${process.env.API_BASE_URL}/v2/resident/community/${communityId}`,
        headers: {
          Authorization,
        },
      } )
      .then( ( { data } ) => {
        dispatch( addResidents( data?.paramObjectsMap?.residentsHomeAddresses ) );
      } )
      .catch( ( error ) => {
        dispatch( residentsError( error ) );
      } );
  };
};
