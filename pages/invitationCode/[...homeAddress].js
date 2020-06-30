import React, { Fragment, useState } from "react";
import HomeAddress from "../../components/invitationCode/homeAddress";
import "../../styles/invitaionCode/index.scss";
import "../../styles/dashboard/changeCommunity/index.scss";
import { connect } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import { __homeAddressValidation } from "$middleware";

const HomeA = connect((state) => state)((props) => {
  const router = useRouter();
  const { dispatch } = props
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null)
  const  homeAddress  = router?.query?.homeAddress;
  
  console.log("======>>>>>123", homeAddress);
  const home_address_validator = (params) => {
    setError(null)
    let { homeAddress_ } = params
    console.log('=====',params)
    let payload = {
      address: {
        active: "string",
        city: homeAddress_?.city,
        city_name: "string",
        congressional_district: "string",
        countyFips: "string",
        county_name: "string",
        default_city_name: "string",
        delivery_line_1: "string",
        description: "string",
        id: "string",
        latitude: 0,
        longitude: 0,
        matched_substrings: [
          {
            length: 0,
            offset: 0,
          },
        ],
        place_id: "string",
        plus4_code: "string",
        primary_number: "string",
        rdi: "string",
        record_type: "string",
        reference: "string",
        secondary: "string",
        secondary_designator: "string",
        secondary_number: "string",
        state: homeAddress_?.state,
        state_abbreviation: "string",
        street_line: homeAddress_?.streetline,
        structured_formatting: {
          main_text: "string",
          main_text_matched_substrings: [
            {
              length: 0,
              offset: 0,
            },
          ],
          secondary_text: "string",
          secondary_text_matched_substrings: [
            {
              length: 0,
              offset: 0,
            },
          ],
        },
        terms: [
          {
            offset: 0,
            value: "string",
          },
        ],
        text: homeAddress_?.text,
        time_zone: "string",
        types: ["string"],
        utc_offset: "string",
        zipcode: "string",
      },
      invitationCode: homeAddress[0].split(". ")[1],
    };
    setIsloading(true);
   return dispatch(__homeAddressValidation(payload))
   .then((data) => {
     setIsloading(false)
    console.log("=-=-=-=-=-?>", data);
    if(data?.data.statusCode === 6){
      setError(data?.data?.message)
    }
    else{

      router.push('/invitationCode/signup')
    }
  })
  .catch((error) => {
    console.log("error=========>", error);
  })
     
  };
  return (
    <Fragment>
      <Head>
        <title>Home Address</title>
      </Head>
      <HomeAddress
        home_address_validator={home_address_validator}
        isloading={isloading}
        address={homeAddress}
        goBack={router.back}
        error = {error}
      />
    </Fragment>
  );
});
export default HomeA
