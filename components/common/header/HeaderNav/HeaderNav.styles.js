import { styled } from '@styles';

export const NavBar = styled.ul`
  list-style: none;
  display: inline-flex;
  font-family: Bozon, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #101239;
  padding-left: 40px;
`;

export const NavbarItem = styled.li`
  list-style: none;
  display: inline-flex;
  font-family: Bozon, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #101239;
  padding-left: 40px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const GetStarted = styled.button`
  background: #212eee;
  border: 1px solid #212eee;
  box-sizing: border-box;
  box-shadow: 0px 10px 30px rgba(33, 46, 238, 0.3);
  border-radius: 3px;
`;
