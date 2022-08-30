import React, { useState } from 'react';
import { FlexBox, Wrapper, Div } from '../../components';
import colors from '../../utils/colors';
import ChapterCard from '../../components/ChapterCard';
import ModalView from '../../components/Modal';
const Chapters = [
    { __html: `<iframe title="Parts of a cell" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"></iframe>` },
    { __html: `<iframe title="Parts of a cell" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"></iframe>` },
    { __html: `<iframe title="Parts of a cell" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"></iframe>` },
    { __html: `<iframe title="Parts of a cell" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"></iframe>` },
    { __html: `<iframe title="Parts of a cell" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"></iframe>` },
]

const Profile = () => {
    const [modalData, updateModalData] = useState(null);

    return (
        <Wrapper background={colors.secondaryTheme} color={colors.themeContrast}>
            <Div>
                <FlexBox flexFlow="row wrap">
                    {Chapters.map((chapter, i) => (
                        <ChapterCard key={i} chapter={chapter} onCardClick={() => updateModalData(chapter)} />
                    ))}
                </FlexBox>
            </Div>
            <ModalView isOpen={!!modalData} requestClose={() => updateModalData(null)} {...modalData} />
        </Wrapper>
    )
}

export default Profile;
