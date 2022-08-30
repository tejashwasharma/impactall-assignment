import React from 'react';
import HyperModal from 'react-hyper-modal';
import { FlexBox } from '..';

const ModalView = ({ __html, requestClose, isOpen }) => {

    return (
        <HyperModal
            isOpen={isOpen}
            requestClose={requestClose}
        >
            <FlexBox justifyContent="center" alignItems="center" height="100%" dangerouslySetInnerHTML={{ __html: __html }}></FlexBox>
        </HyperModal>
    )
}

export default ModalView;
