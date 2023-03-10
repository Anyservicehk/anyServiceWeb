import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-parent">
      <div className="card-section">
        <div className="form-section">
          <div className="header">Create an account</div>
          <div className="sub-title">
            Let's get started with your 30 day free trial.
          </div>
          <div>
            <label htmlFor="userName" className="input-name">
              Name
            </label>
            <br />
            <input type="text" name="userName" className="input-field" />
          </div>
          <div>
            <label htmlFor="Email" className="input-name">
              Email
            </label>
            <br />
            <input type="email" name="Email" className="input-field" />
          </div>
          <div>
            <label htmlFor="Password" className="input-name">
              Password
            </label>
            <br />
            <input type="password" name="Password" className="input-field" />
          </div>
          <div className="btn-1">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIESDko3Du0yFgneIf29Fc4c_hrh9b0L0spbNFhJCp-N1PFQ/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              rel="noreferrer"
            >
              <button>Create account</button>
            </a>
          </div>
          <div className="btn-2">
            <img className="g-icon" src="/assets/icons8-google-48.png" />
            <button>Sign up with google</button>
          </div>
        </div>
        <div className="picture-section">
          <img
            className="img-tag"
            src="/assets/amith-nair-iHJ7xouUyXs-unsplash.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
