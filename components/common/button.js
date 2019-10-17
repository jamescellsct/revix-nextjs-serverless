import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 112px;
  height: 45px;
  border-radius: 100px;
  background-color: #212eee;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.28px;
  line-height: 21px;
  
  ${props => props.primary && css`
    background-color: #212eee;
`}
  
`;

export default Button;
