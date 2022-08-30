import React from 'react';
import { SecondaryCard, CardBody } from '..';
import colors from '../../utils/colors';

const ChapterCard = ({ chapter, onCardClick }) => {

    return (
        <SecondaryCard boxShadow onClick={onCardClick} background={colors.theme}>
            <CardBody display="flex" justifyContent="center">
                <svg width="190" height="190" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100,0 40,180 190,60 10,60 160,180" fill={colors.white} />
                </svg>
            </CardBody>
        </SecondaryCard>
    )
}

export default ChapterCard;
