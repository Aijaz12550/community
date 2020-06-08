import React, { Component } from "react";
import { Image } from 'react-bootstrap'

export class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    const ga =
      window.gapi && window.gapi.auth2
        ? window.gapi.auth2.getAuthInstance()
        : null;
    if (!ga) this.createScript();
  }

  signIn() {
    const ga = window.gapi.auth2.getAuthInstance();
    ga?.signIn().then(
      (googleUser) => {
        let payload;
        // = {
        //   grant_type: "password",
        //   provider: "GOOGLE",
        //   username: googleUser.Pt.yu,
        //   password: googleUser.tc.id_token,
        // };

        // payload = new FormData()
        // payload.grant_type = ("grant_type","password")
        // payload.provider = ("provider", "GOOGLE")
        // payload.username = ("username", googleUser.Pt.yu )
        // payload.password = ("password", googleUser.tc.id_token)

        let formDiv = document.createElement('div')

        let input_ = document.createElement('input')
        input_.setAttribute('key', "grant_type")
        input_.setAttribute("value", "password")
        formDiv.appendChild(input_)

        let input__ = document.createElement('input')
        input__.setAttribute('key', "provider")
        input__.setAttribute("value", "GOOGLE")
        formDiv.appendChild(input__)

        let input___ = document.createElement('input')
        input___.setAttribute("key", "username")
        input___.setAttribute("value", googleUser.Pt.yu)
        formDiv.appendChild(input___)

        let input____ = document.createElement('input')
        input____.setAttribute("key", "password")
        input____.setAttribute('value', googleUser.tc.id_token)
        formDiv.appendChild(input____)

        let formData = new FormData()

        formData.append(HTMLFormElement, formDiv)
        this.props
          ._socialLogin(formData)
          .then((data) => {
            console.log("data from comp social", data);
          })
          .catch((error) => {
            console.log("error", error);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createScript() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    script.onload = this.initGapi;
    document.body.appendChild(script);
  }

  initGapi() {
    const g = window.gapi;
    g.load("auth2", function () {
      g.auth2.init({
        client_id:
          "215485620819-r3ps1inqudcu9u0dvpeu6lrrfktd7dma.apps.googleusercontent.com",
        scope: "profile email openid",
      });
    });
  }

  render() {
    return (
      <button className="google-login-btn" onClick={this.signIn}>
        <Image className='apple-icon' src={'/assets/mockup/google-icon.png'} />Continue with Google
      </button>
    );
  }
}
