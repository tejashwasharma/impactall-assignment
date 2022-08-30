import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/app.action';
import { FlexBox, Wrapper, H1, Div, NavLink } from '../../components';
import Form from '../../components/Form';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper alignItems="center" justifyContent="center">
            <Div>
                <FlexBox alignItems="center" justifyContent="center"><H1>Log In</H1></FlexBox>
                <Form
                    id="login-form"
                    fields={[
                        { type: "text", name: "username", placeholder: "Username" },
                        { type: "password", name: "password", placeholder: "Password" }
                    ]}
                    submitText="Log In"
                    onSubmit={(credentials) => { dispatch(login(credentials)); }}
                />
                <FlexBox alignItems="center" justifyContent="center"><NavLink to="/signup">New user?</NavLink></FlexBox>
            </Div>
        </Wrapper>
    )
}

export default Login;
