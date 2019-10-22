import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Flex, Box } from 'reflexbox/styled-components';
import Typical from 'react-typical';
import Tilt from 'react-tilt';
const tmpSlideOneL = '/static/images/tmp/slide1-left.png';
const tmpSlideOneR = '/static/images/tmp/slide1-right.png';
const tmpSubtext = '/static/images/tmp/subtext.png';
const tmpStats = '/static/images/tmp/stats.png';
const tmpSlide = '/static/images/tmp/slide.png';

const Sticky2Styled = styled.div`
  overflow: hidden;
  .section {
    height: 100%;
    background: transparent;
    img {
      width: 100% !important;
      height: auto;
    }
  }
`;

const ImgBlock = styled.div`
  display: flex;
  image {
    display: block;
    width: 100% !important;
    height: auto;
  }
`;

const SceneOneType = styled.span`
  display: inline-flex;
  font-size: 44px;
  font-weight: bold;
  font-weight: 700;
  letter-spacing: 0.88px;
  line-height: 48.4px;
  color: #101239;
  p {
    padding: 0px;
    margin: 0px;
  }
`;

const Sticky2 = () => (
  <Sticky2Styled>
    <div className="section">
      <Controller>
        <Scene duration={600}>
          <div>
            <Flex pl={60} pr={60} pt={100}>
              <Flex inline width={8 / 16} flexDirection="column">
                <Flex width={1}>
                  <SceneOneType>
                    The&nbsp;{' '}
                    <Typical
                      steps={['smart', 4000, 'simple', 4000, 'secure', 4000]}
                      loop={Infinity}
                      speed={2000}
                    />{' '}
                    way to
                  </SceneOneType>
                </Flex>
                <Flex width={1}>
                  <SceneOneType>invest in crypto</SceneOneType>
                </Flex>
                <Flex>
                  <ImgBlock>
                    <img src={tmpSubtext} />
                  </ImgBlock>
                </Flex>
              </Flex>
              <Box width={8 / 16}>
                <Tilt
                  className="Tilt"
                  options={{ max: 8 }}
                  style={{ height: 1300, width: 745 }}
                >
                  <img src={tmpSlideOneR} />
                </Tilt>
              </Box>
            </Flex>

            <Flex width={1}>
              <ImgBlock>
                <img src={tmpStats} />
              </ImgBlock>
            </Flex>

            <Flex width={1}>
              <Tilt
                className="Tilt"
                options={{ max: 8 }}
                style={{ height: 1300, width: 745 }}
              >
                <img src={tmpSlide} />
              </Tilt>
            </Flex>
          </div>
        </Scene>
      </Controller>
    </div>
  </Sticky2Styled>
);

export default Sticky2;
