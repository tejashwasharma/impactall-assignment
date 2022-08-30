import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { FlexBox, Wrapper, H1, Div, Button } from '../../components';
import CourseCard from '../../components/CourseCard';
import colors from '../../utils/colors';
import { LOGOUT } from '../../redux/constants';
const courses = [
    { class: 'VI', subject: 'Chemistry', subscription: 1, completePercantage: 30, subscriptionType: 'Gold', startDate: moment().subtract(55, 'days'), expiryDate: moment().add(300, 'days') },
    { class: 'VI', subject: 'Chemistry', subscription: 1, completePercantage: 90, subscriptionType: 'Gold', startDate: moment().subtract(55, 'days'), expiryDate: moment().add(300, 'days') },
    { class: 'VI', subject: 'Chemistry', subscription: 1, completePercantage: 53, subscriptionType: 'Gold', startDate: moment().subtract(55, 'days'), expiryDate: moment().add(300, 'days') },
]

const Profile = () => {
    const { profile } = useSelector(s => s.user);
    const dispatch = useDispatch();

    return (
        <Wrapper background={colors.secondaryTheme} color={colors.themeContrast}>
            <Div width="100%">
                <FlexBox alignItems="center" justifyContent="space-between">
                    <H1>Hi @{profile.username}!</H1>
                    <Button onClick={() => dispatch({ type: LOGOUT })}>Logout</Button>
                </FlexBox>
                <FlexBox flexFlow="row wrap">
                    {courses.map((course, i) => (
                        <CourseCard key={i} course={course} />
                    ))}
                </FlexBox>
            </Div>
        </Wrapper>
    )
}

export default Profile;
