import styled from 'styled-components';

const Nav1 = () => {
  return (
    <div>
      <NavWrap>
        <NavContentsWrap>
          <LogoBlock>
            <img src='/assets/nav-logo-web-white.png' alt='logo' />
          </LogoBlock>

          <TitlesBlock>
            <Title>
              <span>Products</span>
              <ArrowBottom
                src='/assets/drop-down-white.png'
                alt='drop-down-arrow'
              />
              <TitleDropDown>
                <TitleDropDownBox border>
                  <BigText>q</BigText>
                  <SmallTextBlock>
                    <div>Quality</div>
                    <div>Measure and inprove team perfomance</div>
                  </SmallTextBlock>
                </TitleDropDownBox>

                <TitleDropDownBox>
                  <BigText>p</BigText>
                  <SmallTextBlock>
                    <div>
                      Pulse<button>New</button>
                    </div>
                    <div>Measure and improve team perfomance</div>
                  </SmallTextBlock>
                </TitleDropDownBox>
              </TitleDropDown>
            </Title>

            <Title>Pricing</Title>

            <Title>Customers</Title>

            <Title>
              <span>Resources</span>
              <ArrowBottom
                src='/assets/drop-down-white.png'
                alt='drop-down-arrow'
              />
              <ResourceDropDown>
                <div>Tech Debt Calculator</div>
                <div>Documentation</div>
                <div>Blog</div>
                <div>Ebooks</div>
                <div>Community</div>
              </ResourceDropDown>
            </Title>

            <Title>Login</Title>
          </TitlesBlock>

          <ButtonBlock>
            <Button1>Contact Sales</Button1>
            <Button2>Get started</Button2>
          </ButtonBlock>

          <BurgerMenu>
            <img src='/assets/burger-white.png' alt='burger-menu' />
          </BurgerMenu>
        </NavContentsWrap>
      </NavWrap>

      <BannerWrap>
        <div></div>
      </BannerWrap>
    </div>
  );
};

const NavWrap = styled.div`
  width: 100%;
  height: 110px;
  position: fixed;
`;

const NavContentsWrap = styled.div`
  width: 1150px;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const LogoBlock = styled.div`
  display: flex;
  img {
    width: 180px;
    height: auto;
  }
`;

const TitlesBlock = styled.div`
  width: 550px;
  height: 110px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    width: 50%;
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 110px;
    left: 0;
    background-color: aqua;
    display: block;
    display: none;
  }
`;

const ArrowBottom = styled.img`
  width: 30px;
  height: 30px;
`;

const TitleDropDown = styled.div`
  width: 300px;
  height: 0;
  position: absolute;
  top: 80%;
  left: -10%;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
`;

const TitleDropDownBox = styled.div`
  padding: 20px;
  background-color: #172b4d;
  border-bottom: ${props =>
    props.border && '0.5px solid rgba(255, 255, 255, 0.2)'};
  display: flex;
`;

const BigText = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 7px;
`;

const SmallTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  position: relative;

  div:nth-child(1) {
    font-size: 15px;
    font-weight: 500;
    display: flex;
    margin-bottom: 5px;
  }

  div:nth-child(2) {
    font-size: 8px;
    letter-spacing: -0.1px;
    font-weight: 300;
  }

  button {
    color: #27326d;
    border-radius: 5px;
    border: none;
    font-size: 8px;
    font-weight: 700;
    margin-left: 7px;
    width: 40px;
    height: 20px;
  }
`;

const ResourceDropDown = styled.div`
  position: absolute;
  width: 250px;
  top: 80%;
  left: -10%;
  border-radius: 10px;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: 0.3s;

  div {
    background-color: #172b4d;
    padding: 15px 20px;
    font-weight: 300;
    font-size: 14px;
  }

  div:not(:last-child) {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  }
`;

const ButtonBlock = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Button1 = styled.button`
  margin-right: 10px;
  width: 140px;
  height: 45px;
  border-radius: 10px;
  border: white solid 1.5px;
  background-color: transparent;
  color: white;
  font-weight: 500;
  transition: 0.3s;

  :hover {
    background-color: white;
    color: #27326d;
    font-weight: 700;
  }
`;

const Button2 = styled.button`
  width: 140px;
  height: 45px;
  border-radius: 10px;
  background-color: white;
  color: #27326d;
  font-weight: 700;
  border: none;
  transition: 0.3s;

  :hover {
    background-color: #f2f2f2;
  }
`;

const BurgerMenu = styled.div`
  width: 54px;
  height: 40px;
  border-radius: 7px;
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  justify-content: center;
  align-items: center;
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  img {
    width: 25px;
    height: auto;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 15px;
  position: relative;
  margin-left: 20px;
  cursor: pointer;

  :hover ${TitleDropDown} {
    height: 187px;
    opacity: 1;
  }

  :hover ${ResourceDropDown} {
    height: 259px;
    opacity: 1;
  }
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 1000px;
  background-image: linear-gradient(-45deg, #4c6cd3, #27326d);
`;

export default Nav1;
