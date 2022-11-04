import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <MainWrap>
      <h1>Main</h1>
      <LinkWrap>
        <StyledLink to='/nav1'>Nav1</StyledLink>
        <StyledLink to='/nav2'>Nav2</StyledLink>
      </LinkWrap>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkWrap = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  margin: 20px;
  width: 150px;
  height: 50px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  border-radius: 15px;
  font-weight: 600;
`;

export default Main;
