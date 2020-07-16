import {
  sendInvitesSuccess,
  sendInvitesError,
  invitationCode,
} from "../actions";
import { _axios, _axios1 } from "$config";
import axios from "axios";

export const sendInvites = ( { Authorization, invitationObj } ) => {
  return async ( dispatch ) => {
    await axios
      .post( "http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
        method: "POST",
        url: `${process.env.API_BASE_URL}/v2/invitation/send`,
        body: invitationObj,
        headers: {
          Authorization,
          "Content-Type": "application/json"
        },
      } )
      .then( ( { data } ) => {
        dispatch( sendInvitesSuccess( data?.paramObjectsMap?.InvitationEntityVO ) );
      } )
      .catch( ( error ) => {
        dispatch(
          sendInvitesError(
            JSON.parse( JSON.stringify( error.response ) )?.data?.paramObjectsMap
              ?.ErrorMessage
          )
        );
      } );
  };
};

export const __invitationCode = ( code ) => {
  return ( dispatch ) => {
    return new Promise( async ( resolve, reject ) => {
      await axios
        .post( "http://ec2-18-188-176-187.us-east-2.compute.amazonaws.com:4000/", {
          method: "GET",
          url: `${process.env.API_BASE_URL_1}/v2/users/invitationCode/${code}/valid`
        } )
        .then( ( data ) => {
          dispatch( invitationCode( data?.data?.body ) );
          resolve( data );
        } )
        .catch( ( error ) => {
          reject( error );
          console.log( "error ===>", error );
        } );
    } );
  };
};

export const __homeAddressValidation = ( payload ) => {
  return ( dispatch ) => {
    return new Promise( async ( resolve, reject ) => {
      await axios
        .post( "/v1/users/validateCommunity", payload )
        .then( ( data ) => {
          resolve( data );
        } )
        .catch( ( error ) => reject( error ) );
    } );
  };
};
