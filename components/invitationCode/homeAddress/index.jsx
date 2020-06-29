import React, { useState } from "react";
import { Layout } from "../layout";
import { CentralComponent } from "../centralComponent";
import Link from "next/link";
import ReactLoading from "react-loading";
import "../../../styles/dashboard/changeCommunity/index.scss";
import { Image, Row, Col } from 'react-bootstrap'
const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usAutocomplete.Lookup;

// for Server-to-server requests, use this code:
// let authId = 'd40bb2a6-b603-b206-dc38-6a048fae2f2e'
// let authToken = 'DATOOw43bm4L3T03YQ1p';
// const credentials = new SmartyStreetsCore.StaticCredentials(authId, authToken);

// for client-side requests (browser/mobile), use this code:
let key = '24417128407726272'
const  credentials = new SmartyStreetsCore.SharedCredentials(key);

let client = SmartyStreetsCore.buildClient.usAutocomplete(credentials);

// Documentation for input fields can be found at:
// https://smartystreets.com/docs/cloud/us-autocomplete-api#http-request-input-fields

// let lookup = new Lookup("4770 Lincoln Ave O");

// client.send(lookup)
// 	.then(logSuggestions)
// 	.catch(console.log);

// lookup.maxSuggestions = 10;

// lookup.cityFilter = ["Ogden"];
// lookup.stateFilter = ["IL"];
// lookup.prefer = ["Ogden, IL"];
// lookup.preferRatio = 0.33333333;

// client.send(lookup)
// 	.then(logSuggestions)
// 	.catch(console.log);

// function logSuggestions(response) {
// 	console.log(response.result);
// 	console.log("*********************");
// }

const HomeAddress = ({ home_address_validator, isloading, isError, address, goBack }) => {
  const [homeAddress, setHomeAddress] = useState("")
  const [apt, setApt] = useState("")
  const [listCommunityName, setListCommunityName] = useState([
    { name: 'Downtown West', location: 'St. Louis, MO, USA' },
    { name: 'Town West', location: 'St. Louis, MO, USA' },
    { name: 'Newyork West', location: 'St. Louis, MO, USA' }
  ])

  const changehandler = (value) => {
    setHomeAddress(value)

let lookup = new Lookup(value);

client.send(lookup)
	.then(logSuggestions)
	.catch(console.log);

lookup.maxSuggestions = 10;

lookup.cityFilter = ["Ogden"];
lookup.stateFilter = ["IL"];
lookup.prefer = ["Ogden, IL"];
lookup.preferRatio = 0.33333333;

client.send(lookup)
	.then(logSuggestions)
	.catch(console.log);

function logSuggestions(response) {
  console.log(response.result);
  setListCommunityName(response?.result)
	console.log("*********************");
}
  }
  return (
    <Layout>
      <CentralComponent steps={[{ title: '' }, { title: '' }, { title: '' }]} progress_value={1}>
        <div className="central-component-body-1">
          <span className="home-address-heading">
            It seems you're also a resident at
            <span> {address} </span>
            Please Enter Your Home Address.
          </span>

          <span className="home-address-heading-2">
            Your home address is required to use resident app and stay connected
            with your neighbors
          </span>

          <span className="inp-container">
            <label className="inp-label">Home Address</label>
            <input
              className="inp-compo"
              onChange={(e) => changehandler(e.target.value)}
              value={homeAddress}
              type="text"
              placeholder="AED5687"
            />
             
       
         
         
           
                <div className='find-community-name'>
                
                    {listCommunityName.map((val, index) => (
                      <li onClick={()=>setHomeAddress(val.text) || changehandler(val.text)} key={index}>
                        <span className='_icon'><Image src='/assets/mockup/dropdown-list-icon.png' /></span>
                        <span className='list-view'>
                          <span className='name'>{val.text}</span>
                          <span className='location'>{val.city}</span>
                        </span>
                      </li>
                    ))}
                  
                </div>
                
           
      
            <br />
          </span>
        </div>

        <div className="central-component-body-2">
          <span className="inp-container">
            <label className="inp-label">Apt / Unit</label>
            <input
              className="inp-compo"
              onChange={(e) => setApt(e.target.value)}
              value={apt}
              type="text"
              placeholder="AED5687"
            />
          </span>
          <span></span>
          <span></span>
          {isError && (
            <span className="home-address-error">
              Cannot find your home at this community. Please enter your correct
              home address or please contact our support at
              <Link href="/test">support@weneighbors.io</Link>
              for any help.
            </span>
          )}

          <div className="btn-container">
            <button onClick={goBack}>Back</button>
            <div
              style={{ maxWidth: "150px" }}
              className={!isloading ? "btn-class" : "btn-class-isloading"}
              onClick={() => home_address_validator({ homeAddress, apt })}
              disabled={isloading}
            >
              {isloading ? (
                <ReactLoading
                  height={"20px"}
                  width={"20px"}
                  type="spin"
                  color="#fff"
                />
              ) : (
                "Next"
              )}
            </div>
          </div>
        </div>
      </CentralComponent>
    </Layout>
  );
};
export default HomeAddress;
