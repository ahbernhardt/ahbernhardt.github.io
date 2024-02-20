import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const MobileNav = ({ showNav, setShowNav }) => {
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };
  useLockBodyScroll();

  return (
    <Nav showNav={showNav}>
      <CloseButton onClick={() => setShowNav(false)}>X</CloseButton>
      <MobileInner>
        <NavLink
          activeClass="active"
          to="statement"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={700}
          onClick={() => setShowNav(false)}
        >
          The Statement
        </NavLink>
        <NavLink
          activeClass="active"
          to="details"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={700}
          onClick={() => setShowNav(false)}
        >
          The Details
        </NavLink>
        <NavLink
          activeClass="active"
          to="merch"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={700}
          onClick={() => setShowNav(false)}
        >
          The Merch
        </NavLink>
        <NavLink
          activeClass="active"
          to="games"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={700}
          onClick={() => setShowNav(false)}
        >
          The Games
        </NavLink>
        <NavLink
          activeClass="active"
          to="look"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={700}
          onClick={() => setShowNav(false)}
        >
          The Look
        </NavLink>
      </MobileInner>
    </Nav>
  );
};

export default MobileNav;

// background-image: url('https://www.nba.com/resources/static/team/v2/timberwolves/projects/2021-22/tw21-city-edition/images/diamond-pattern.jpg');

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: var(--wolves-black);
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s all ease-in-out;
  transform: ${({ showNav }) =>
    showNav ? "translateX(0)" : "translateX(-100%)"};
  z-index: 10;
`;

const MobileInner = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  margin: 1.2rem 0.5rem 0 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--wolves-grey);
  font-family: "Futura-PT", sans-serif;
  font-size: 1rem;
  line-height: 1.1;
  font-weight: 700;
  &.active {
    color: var(--wolves-white);
    border-bottom: 1px solid var(--wolves-white);
  }
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  margin: 1.5em 0.5em;
  width: 64px;
  cursor: pointer;
  border: none;
  background: none;
  color: var(--wolves-white);
  font-size: 1.5rem;
  font-family: "Futura-PT", Arial, Helvetica, sans-serif;
  font-weight: 700;
  z-index: 11;
  position: absolute;
  top: 0;
  right: 0;
`;
