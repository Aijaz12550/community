import React, { Component } from 'react';


// To federated sign in from Google
 export class GoogleLogin extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        const ga = window.gapi && window.gapi.auth2 ? 
            window.gapi.auth2.getAuthInstance() : 
            null;
        if (!ga) this.createScript();
    }

    signIn() {
        const ga = window.gapi.auth2.getAuthInstance();
        ga?.signIn().then(
            googleUser => {
                console.log('google ===>',googleUser)
            },
            error => {
                console.log(error);
            }
        );
    }

    
    createScript() {
        // load the Google SDK
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.onload = this.initGapi;
        document.body.appendChild(script);
    }

    initGapi() {
        // init the Google SDK client
        const g = window.gapi;
        g.load('auth2', function() {
            g.auth2.init({
                client_id: '215485620819-r3ps1inqudcu9u0dvpeu6lrrfktd7dma.apps.googleusercontent.com',
                // authorized scopes
                scope: 'profile email openid'
            });
        });
    }

    render() {
        return (
            
                <button className="google-login-btn" onClick={this.signIn}>continue with Google</button>
           
        );
    }
}