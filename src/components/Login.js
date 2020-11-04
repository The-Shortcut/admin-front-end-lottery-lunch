import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBCol } from "mdbreact";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../App.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const usersJson = {
    description: "Login and passwords of users",
    users: {
      testUser: {
        password: "test",
        type: "test",
      },
    },
  };
  const handleAuth = () => {
    const value = props.auth;
    props.setAuth(!value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const filterUserName = Object.keys(usersJson.users).filter((e) => {
      return e === userName;
    });
    if (
      filterUserName.length > 0 &&
      usersJson.users[userName].password === password
    ) {
      window.localStorage.setItem(
        "user",
        JSON.stringify(usersJson.users[userName])
      );
      console.log("Logged in");
      handleAuth();
    } else {
      alert("Wrong login or password");
    }
  };

  return (
    <div className='login'>
      <Router>
        <MDBCol size='3'>
          <form onSubmit={onFormSubmit}>
            <p className='h5 text-center mb-4'>Sign in</p>
            <div className='grey-text'>
              <MDBInput
                label='Type your email'
                icon='envelope'
                group
                type='text'
                validate
                error='wrong'
                success='right'
                getValue={(value) => setUserName(value)}
              />
              <MDBInput
                label='Type your password'
                icon='lock'
                group
                type='password'
                validate
                getValue={(value) => setPassword(value)}
              />
            </div>
            <div className='text-center'>
              <MDBBtn type='submit' onClick={onFormSubmit}>
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </Router>
    </div>
  );
};

export default Login;
