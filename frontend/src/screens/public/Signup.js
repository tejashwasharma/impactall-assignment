import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FlexBox, Wrapper, H1, Div, NavLink } from '../../components';
import Form from '../../components/Form';
import { signup } from '../../redux/actions/app.action';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Wrapper alignItems="center" justifyContent="center">
            <Div>
                <FlexBox alignItems="center" justifyContent="center"><H1>Sign Up</H1></FlexBox>
                <Form
                    id="signup-form"
                    fields={[
                        { type: "text", name: "username", placeholder: "Username" },
                        { type: "password", name: "password", placeholder: "Password" },
                        { type: "date", name: "licenseStartDate", placeholder: "License Start Date" },
                        { type: "date", name: "licenseEndDate", placeholder: "License End Date" }
                    ]}
                    submitText="Create"
                    onSubmit={(user) => { dispatch(signup(user, () => navigate("/"))); }}
                />
                <FlexBox alignItems="center" justifyContent="center"><NavLink to="/">Already have an account?</NavLink></FlexBox>
            </Div>
        </Wrapper>
    )
}

export default Signup;
