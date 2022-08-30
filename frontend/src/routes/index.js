import React from 'react';
import { useSelector } from 'react-redux';
import AuthRoutes from './AuthRoutes';
import PublicRoutes from './publicRoutes';

const Routes = () => {
    const { app: { loading }, user: { profile } } = useSelector(state => state);

    return (
        <React.Fragment>
            {loading ? <p>Loading...</p> : null}
            {profile ? <AuthRoutes /> : <PublicRoutes />}
        </React.Fragment>
    )
}

export default Routes;
