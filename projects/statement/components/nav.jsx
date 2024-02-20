import React, { useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import MobileNav from "./mobileNav";
import Logo from "./logo";

const Navigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [showNav, setShowNav] = useState(false);

  return (
    <Nav>
      {showNav ? (
        <MobileNav showNav={showNav} setShowNav={setShowNav} />
      ) : (
        <Container>
          <NavLink to="#" onClick={scrollToTop} smooth={true} duration={700}>
            <Logo />
          </NavLink>
          <NavInner>
            <NavLink
              activeClass="active"
              to="statement"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-85}
              duration={700}
            >
              The Statement
            </NavLink>
            <NavLink
              activeClass="active"
              to="details"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-85}
              duration={700}
            >
              The Details
            </NavLink>
            <NavLink
              activeClass="active"
              to="merch"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-85}
              duration={700}
            >
              The Merch
            </NavLink>
            <NavLink
              activeClass="active"
              to="games"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-85}
              duration={700}
            >
              The Games
            </NavLink>
            <NavLink
              activeClass="active"
              to="look"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-85}
              duration={700}
            >
              The Look
            </NavLink>
          </NavInner>
          <MobileButton onClick={() => setShowNav(!showNav)} />
        </Container>
      )}
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  background-color: var(--wolves-black);
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 4;
  height: 80px;
  border-bottom: rgba(255, 255, 255, 0.2) 1px solid;

  @media screen and (max-width: 768px) {
    height: 65px;
  }
`;

const Container = styled.div`
  padding: 0.25rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0.2rem 0.1rem;
  }
`;

const NavInner = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 2rem;
  margin-top: 30px;
  // margin-right: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  padding: 0.4rem 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--wolves-grey);
  font-size: 1rem;
  line-height: 0.7;
  font-weight: 500;

  &.active {
    color: var(--wolves-white);
    border-bottom: 1px solid var(--wolves-white);
  }

  &:hover {
    color: var(--wolves-aurora);
    border-bottom: 2px solid var(--wolves-aurora);
  }

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const MobileButton = styled.div`
  display: block;
  background-image: url("https://www.nba.com/resources/static/team/v2/timberwolves/projects/2021-22/tw21-city-edition/images/menu.svg");
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
