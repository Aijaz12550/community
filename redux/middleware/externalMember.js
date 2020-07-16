import { getExternalMemberSuccess, getExternalMemberError } from "../actions";
import { _axios } from "$config";
import axios from 'axios';

export const getExternalMember = ( { Authorization, communityId } ) => {
  return async ( dispatch ) => {
    await axios
      .post( "http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
        method: "GET",
        url: `${process.env.API_BASE_URL}/v2/invitation/community/${communityId}`,
        headers: {
          Authorization,
        },
      } )
      .then( ( { data } ) => {
        // console.log(data, "ExternalMember");
        dispatch( getExternalMemberSuccess( data?.paramObjectsMap?.InvitationList ) );
      } )
      .catch( ( error ) => {
        dispatch( getExternalMemberError( error ) );
      } );
  };
};
