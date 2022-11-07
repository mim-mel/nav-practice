import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav1 = () => {
  const [show, setShow] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [products, setProducts] = useState(false);
  const [resource, setResource] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.addEventListener('scroll', () => {});
    };
  }, []);

  const mobileToggle = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };

  const productsToggle = () => {
    if (products) {
      setProducts(false);
    } else {
      setProducts(true);
    }

    if (products === false && resource !== products) {
      setResource(false);
    }
  };

  const resourceToggle = () => {
    if (resource) {
      setResource(false);
    } else {
      setResource(true);
    }

    if (resource === false && resource !== products) {
      setProducts(false);
    }
  };

  return (
    <div>
      <NavWrap show={show}>
        <NavContentsWrap>
          <LogoBlock>
            <img src='/assets/nav-logo-web-white.png' alt='logo' />
          </LogoBlock>

          <TitlesBlock show={show} mobileMenu={mobileMenu}>
            <Title
              onClick={() => {
                productsToggle();
              }}
            >
              <span>Products</span>
              <ArrowBottom
                src='/assets/drop-down-white.png'
                alt='drop-down-arrow'
              />
              <TitleDropDown products={products} show={show}>
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

            <Title>
              <span>Pricing</span>
            </Title>

            <Title>
              <span>Customers</span>
            </Title>

            <Title
              onClick={() => {
                resourceToggle();
              }}
            >
              <span>Resources</span>
              <ArrowBottom
                src='/assets/drop-down-white.png'
                alt='drop-down-arrow'
              />
              <ResourceDropDown resource={resource} show={show}>
                <div>Tech Debt Calculator</div>
                <div>Documentation</div>
                <div>Blog</div>
                <div>Ebooks</div>
                <div>Community</div>
              </ResourceDropDown>
            </Title>

            <Title>
              <span>Login</span>
            </Title>

            <ButtonBlock>
              <Button1>Contact Sales</Button1>
              <Button2>Get started</Button2>
            </ButtonBlock>
          </TitlesBlock>

          <BurgerMenu
            onClick={() => {
              mobileToggle();
            }}
          >
            {mobileMenu ? (
              <img src='/assets/x-mark.png' alt='x-mark' />
            ) : (
              <img src='/assets/burger-white.png' alt='burger-menu' />
            )}
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
  height: ${props => (props.show ? '85px' : '110px')};
  position: fixed;
  background-color: ${props => (props.show ? '#222f45' : 'transparent')};
  transition: 0.3s;
`;

const NavContentsWrap = styled.div`
  width: 1150px;
  height: 100%;
  display: flex;
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
  width: 20%;
  display: flex;
  img {
    width: 150px;
    height: auto;
  }
`;

const TitlesBlock = styled.div`
  width: 80%;
  position: relative;
  height: 110px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    position: absolute;
    left: 0;
    width: ${props => (props.mobileMenu ? '100vw' : 0)};
    height: ${props => (props.mobileMenu ? '100vh' : 0)};
    top: ${props => (props.show ? '85px' : '110px')};
    background-color: #222f45;
    display: block;
    overflow: hidden;
    padding-top: 40px;
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
  top: ${props => (props.show ? '105%' : '80%')};
  left: -10%;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;

  @media screen and (max-width: 1024px) {
    opacity: ${props => (props.products ? '1' : '0')};
    height: ${props => (props.products ? '200px' : '0')};
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    margin-top: ${props => (props.products ? '20px' : '0')};
  }
`;

const TitleDropDownBox = styled.div`
  padding: 20px;
  background-color: #172b4d;
  border-bottom: ${props =>
    props.border && '0.5px solid rgba(255, 255, 255, 0.2)'};
  display: flex;
  transition: 0.3s;

  @media (hover: hover) {
    :hover {
      background-color: #0b1b35;
    }
  }

  @media screen and (max-width: 1024px) {
    background-color: #313e55;
  }
`;

const BigText = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 7px;

  @media screen and (max-width: 1024px) {
    padding-left: 20px;
  }
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
  top: ${props => (props.show ? '105%' : '80%')};
  left: -10%;
  border-radius: 10px;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: 0.3s;

  @media screen and (max-width: 1024px) {
    opacity: ${props => (props.resource ? '1' : '0')};
    height: ${props => (props.resource ? '320px' : '0')};
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    margin-top: ${props => (props.resource ? '20px' : '0')};
    border-radius: 0;
  }

  div {
    background-color: #172b4d;
    padding: 15px 20px;
    font-weight: 300;
    font-size: 14px;
    transition: 0.3s;

    @media (hover: hover) {
      :hover {
        background-color: #0b1b35;
      }
    }

    @media screen and (max-width: 1024px) {
      padding: 20px 40px;
      background-color: #313e55;
    }
  }

  div:not(:last-child) {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 5vw;

  @media screen and (max-width: 1024px) {
    justify-content: left;
    align-items: flex-start;
    margin-top: 30px;
    margin-left: 40px;
  }
`;

const Button1 = styled.button`
  margin-right: 10px;
  height: 45px;
  width: 150px;
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
  width: 150px;
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

  @media screen and (max-width: 1400px) {
  }
`;

const BurgerMenu = styled.div`
  width: 54px;
  height: 40px;
  border-radius: 7px;
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  justify-content: center;
  align-items: center;
  margin-left: auto;
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
  flex-flow: row wrap;

  span {
    @media screen and (max-width: 1024px) {
      margin-left: 40px;
    }
  }

  @media (hover: hover) {
    :hover ${TitleDropDown} {
      height: 187px;
      opacity: 1;
    }
  }

  @media (hover: hover) {
    :hover ${ResourceDropDown} {
      height: 259px;
      opacity: 1;
    }
  }

  @media screen and (max-width: 1300px) {
    font-size: 13px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 17px;
    margin-bottom: 17px;
    /* flex-direction: column; */
    margin-left: 0;
  }
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 1500px;
  background-image: linear-gradient(-45deg, #4c6cd3, #27326d);
`;

export default Nav1;
