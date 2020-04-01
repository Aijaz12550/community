import React, {Fragment, useEffect} from 'react'
import Head from 'next/head'

export const Apple = () => {

    useEffect(()=>{
        AppleID.auth.init({
            clientId : '[CLIENT_ID]',
            scope : '[SCOPES]',
            redirectURI : '[REDIRECT_URI]',
            state : '[STATE]',
            usePopup : true //or false defaults to false
        });
    })
    return(
        <Fragment>
            <Head>
            <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
            </Head>
            <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
        </Fragment>
    )
}