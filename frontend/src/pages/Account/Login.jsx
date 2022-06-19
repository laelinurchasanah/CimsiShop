import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <form>
        <div className="container">
          <div className="box login">
            <div className="form-login">
                <h2>LOGIN</h2>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label> <br></br>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required placeholder="Input your Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label><br></br>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required placeholder="Input your password"
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <p>Dont have an account ?
                <Link to="/regis">Registration Here</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
