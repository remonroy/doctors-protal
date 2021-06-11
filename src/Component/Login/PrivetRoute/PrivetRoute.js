import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import { userContext } from '../../../App';

const PrivetRoute = ({ children, ...rest }) => {
    const [loggedInuser, setLoggedInuser] = useContext(userContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedInuser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;