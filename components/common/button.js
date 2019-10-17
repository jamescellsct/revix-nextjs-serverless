import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
  width: 112px;
  height: 45px;
  border-radius: 100px;
  background-color: #212eee;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.28px;
  line-height: 21px;
  
  ${props => props.primary && css`
    background: #212eee;
`}
  
`;

export default Button;
