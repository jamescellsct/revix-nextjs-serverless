import React from 'react';
import Iframe from 'react-iframe'
import {BgWrapper} from "./bg-animation.styles";

const BgAnimation = () => {
    return (
        <BgWrapper>
            <Iframe url="/bg-ani/index.html"
                    width="100%"
                    height="100%"
                    display="initial"
                    position="relative"/>
        </BgWrapper>
    );
};

export default BgAnimation;
