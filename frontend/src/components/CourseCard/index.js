import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, FlexBox, Span, Div } from '..';
import ProgressBar from '../ProgressBar';
import colors from '../../utils/colors';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate("/chapters")}>
            <Div boxShadow={colors.shadow} padding="15px 20px" borderRadius="25px">
                <CardHeader>
                    <FlexBox flexDirection="row" justifyContent="space-between">
                        <Span>CLASS {course.class}</Span>
                        <Span isBadge>{course.subscriptionType.toUpperCase()}</Span>
                    </FlexBox>
                    <FlexBox flexDirection="row" justifyContent="space-between">
                        <Span>{course.subject}</Span>
                        <Span><Span label>Subscription: </Span>{`${course.subscription} YEAR${course.subscription > 1 ? 'S' : ''}`}</Span>
                    </FlexBox>
                </CardHeader>
                <CardBody>
                    <ProgressBar percentage={course.completePercantage} />
                </CardBody>
                <CardFooter>
                    <FlexBox flexDirection="row" justifyContent="space-between">
                        <Span label>Start Date</Span>
                        <Span label>Expiry Date</Span>
                    </FlexBox>
                    <FlexBox flexDirection="row" justifyContent="space-between">
                        <Span>{moment(course.startDate).format('DD MMM YYYY')}</Span>
                        <Span highlight>{moment(course.expiryDate).format('DD MMM YYYY')}</Span>
                    </FlexBox>
                </CardFooter>
            </Div>
        </Card>
    )
}

export default CourseCard;
