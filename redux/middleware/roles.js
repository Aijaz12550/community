import { getRolesSuccess, getRolesError } from "../actions";
import { _axios } from "$config";
import axios from 'axios';

export const getRoles = () => {
  return async ( dispatch ) => {
    await axios( "ec2-18-218-60-110.us-east-2.compute.amazonaws.com:4000/", {
      method: "GET",
      url: `${process.env.API_BASE_URL}/v2/lookup/memberRoleTitles`
    } )
      .then( ( { data } ) => {
        dispatch( getRolesSuccess( data?.paramObjectsMap?.LookupList ) );
      } )
      .catch( ( error ) => {
        dispatch( getRolesError( error ) );
      } );
  };
};
