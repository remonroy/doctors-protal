import React, { useContext } from 'react';
import LoginBg from '../../../images/loginBg.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../../App';
import {
  useHistory,
  useLocation
} from "react-router-dom";
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInuser,setLoggedInuser]=useContext(userContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSingin=()=>{
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInuser(signedInUser)
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
        });
    }
    return (
        <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="from-group mt-5">
              <button className="btn btn-primary" onClick={handleSingin}>Google Sign in</button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={LoginBg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Login;