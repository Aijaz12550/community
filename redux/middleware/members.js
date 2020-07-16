import { getMembersSuccess, getMembersError } from "../actions";
import axios from "axios";

export const getMembers = ( payload ) => {
  const { Authorization, communityId } = payload;
  console.log( Authorization, 'memebers=============' );

  return async ( dispatch ) => {
    await axios
      .post( "http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
        url: `${process.env.API_BASE_URL}/v2/member/community/${communityId}`,
        method: "GET",
        headers: {
          Authorization,
        },
      } )
      .then( ( { data } ) => {
        dispatch( getMembersSuccess( data?.paramObjectsMap?.communityMembers ) );
      } )
      .catch( ( error ) => {
        dispatch( getMembersError( error ) );
      } );
  };
};
