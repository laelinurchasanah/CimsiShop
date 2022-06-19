import React from 'react';
import {Link} from 'react-router-dom'

const Regis = () => {
  return (
    <>
    <form>
        <div className="container">
          <div className="box login">
            <div className="form-login">
                <h2>Registration</h2>

                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                 Full Name
                </label><br></br>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required placeholder="Your full name"
                />
              </div> 
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
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label><br></br>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required placeholder="Confirm Password"
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <p>Already have an account ?
                <Link to="/login">Login Here</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Regis