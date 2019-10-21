import React, { useRef } from 'react';
import { useScrollToReveal } from 'use-scroll-to-reveal';
import styled, { keyframes, css } from 'styled-components';
import * as animations from 'react-animations';

const StyledSection = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  width: 100vw;
  height: 101vh;
  min-height: 100vh;
  background-image: linear-gradient(
    147deg,
    hsl(${({ hue = 0 }) => hue}, 55%, 75%) 0%,
    hsl(${({ hue = 0 }) => hue}, 45%, 35%) 74%
  );
`;

const Content = styled.div`
  ${({ revealed, animation }) =>
    revealed &&
    css`
      animation: 1s ${animation};
    `}
`;

const MySection = ({ children, animation, ...props }) => {
  const ref = useRef();
  const revealed = useScrollToReveal(ref);
  return (
    <StyledSection {...props}>
      <Content {...{ revealed, ref, animation }} className="RevixScrollerContainer">{children}</Content>
    </StyledSection>
  );
};

const MyA = styled.a`
  color: white;
  margin-right: 1em;
`;

const example = `
import React, { useRef }
  from 'react'
import { useScrollToReveal }
  from 'use-scroll-to-reveal'
import styled, { keyframes, css }
  from 'styled-components';
import * as animations
  from 'react-animations';
const Section = styled.section\`
  // ... your styles
  \${({revealed}) =>
    revealed &&
      css\`animation: 1s \${
        keyframes\`\${animations.zoomInUp}\`
      }\`}
\`;
const MySection = (props) => {
  const ref = useRef()
  const revealed = useScrollToReveal(ref)
  return <Section
    revealed={revealed}
    ref={ref}
    {...props}/>
}`;

const Container = styled.main`
  scroll-snap-type: y proximity;
  width: 100vw;
  flex-basis: 100vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  font-size: calc(16px + 0.025vw);
`;
const HomeContainer = () => {
  return (
    <Container>
      <MySection hue={270} animation={keyframes`${animations.bounceInUp}`}>
        <h1>React hook for revealing content upon scroll</h1>
        <MyA href="https://github.com/Hermanya/use-scroll-to-reveal">
          github
        </MyA>
        <MyA href="https://www.npmjs.com/package/use-scroll-to-reveal">npm</MyA>
      </MySection>
      <MySection hue={30} animation={keyframes`${animations.tada}`}>
        <h2>Use today!</h2>
        <pre>
          <code>{`npm install use-scroll-to-reveal`}</code>
        </pre>
        <pre>
          <code>{`yarn add use-scroll-to-reveal`}</code>
        </pre>
      </MySection>
      <MySection hue={150} animation={keyframes`${animations.zoomInUp}`}>
        <h2>Usage example:</h2>
        <pre>
          <code>{example}</code>
        </pre>
      </MySection>
    </Container>
  );
};
export default HomeContainer;
