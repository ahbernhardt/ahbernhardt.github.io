import React from "react";
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import { games } from "/projects/statement/data/games";
// import AccentTextRight from "../../components/AccentText/right";
// import dloJaden from "../../images/TheLook/Look 10.jpg";
import GameSectionHeader from "/projects/statement/components/gameHeader";
const gameBG = "https://ahbernhardt.github.io/projects/statement/Paper-strip.png";

const detailsBackground = "https://ahbernhardt.github.io/projects/statement/Dlo-Jaden.png";
const mobile = "https://ahbernhardt.github.io/projects/statement/dlo-jaden-mobile.png";

const TheGames = () => {
  return (
    <section id="games">
      <BackgroundImage>
        <Wrapper>
          <GameSectionHeader sectionTitle={"Games"} />
          <SubHeader>
            <Fade duration={2500}>
              <h3>
                CATCH THE STATEMENT EDITION JERSEYS AT THE FOLLOWING HOME GAMES
              </h3>
            </Fade>
          </SubHeader>
          <div className="w-full h-auto">
            <GamesContainer>
              <Fade duration={2500}>
                {games.map((game) => (
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <GameContainer>
                    <Grid>
                      <Column>
                        <h3>{game.dow}</h3>
                        <h4>{game.date}</h4>
                        <h4>{game.gameStart}</h4>
                      </Column>
                      <Column>
                        <h2>Vs.</h2>
                      </Column>
                      <Column>
                        <div className="text-center">
                          <img
                            src={game.opponentLogo}
                            alt={game.opponentTeam}
                          />
                          <h5>{game.opponentCity}</h5>
                          <h6>{game.opponentTeam}</h6>
                        </div>
                      </Column>
                      <Column>
                        <a
                          href={game.ticketLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Single Game Waitlist
                        </a>
                      </Column>
                    </Grid>
                  </GameContainer>
                ))}
              </Fade>
            </GamesContainer>
          </div>
        </Wrapper>
      </BackgroundImage>
    </section>
  );
};

export default TheGames;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  position: relative;
  align-self: center;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 100%;
    align-self: flex-end;
  }
`;
const SubHeader = styled.div`
  position: relative;
  z-index: 2;
  padding: 1rem 0 0.5rem 0;
  h3 {
    font-weight: 300;
    line-height: 1.1;
    margin: 0;
    text-transform: uppercase;
    font-size: clamp(0.8rem, 2vw, 1rem);
    text-align: left;
    color: var(--wolves-white);
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1rem 2rem;
    font-weight: 700;
    max-width: 100%;
  }

  @media screen and (min-width: 1024px) {
    padding: 4rem 2rem 0.5rem 3rem;
    font-weight: 700;
  }
`;

const GamesContainer = styled.div`
  margin: 0 0 2rem auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  color: var(--wolves-white);
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 60%;
    max-height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (min-width: 768px) and (max-width; 1023px) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

const GameContainer = styled.div`
  background-image: url(${gameBG});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  line-height: 1.1;
  margin: 0;

  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-weight: 300;
    font-size: 0.8rem;
  }
  h4 {
    font-size: 1rem;
  }

  h5 {
    font-weight: 300;
    font-size: 0.8rem;
  }
  h6 {
    font-size: 1rem;
  }
  img {
    max-width: 50px;
    width: 100%;
  }
  a {
    color: var(--wolves-white);
    text-decoration: none;
    background-color: var(--wolves-aurora);
    border: 2px solid var(--wolves-white);
    padding: 0.4rem 2rem;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 0.5rem;
    transition: 0.3s all ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: max-content;
    &:hover {
      background-color: var(--wolves-shadow-gray);
    }
    @media screen and (min-width: 1024px) {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 0.4rem 1rem;
    padding: 0;
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-weight: 300;
      font-size: 1rem;
    }
    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-weight: 300;
      font-size: 0.8rem;
    }
    h6 {
      font-size: 1rem;
    }
    img {
      max-width: 100px;
      width: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    margin: 0.4rem 3rem;
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-weight: 300;
      font-size: 1rem;
    }
    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-weight: 300;
      font-size: 0.8rem;
    }
    h6 {
      font-size: 1rem;
    }
    img {
      max-width: 100px;
      width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0.5rem;
`;

const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 0 0 10% 0;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${detailsBackground});
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 20%;
    width: 100%;
    top: -1px;
    border: transparent;
    background: linear-gradient(to bottom, black 30%, transparent 100%);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 20%;
    width: 100%;
    bottom: -1px;
    border: transparent;
    background: linear-gradient(to top, black 30%, transparent 100%);
  }
  @media only screen and (max-device-width: 767px) {
    background-image: none;
    background-color: var(--wolves-black);
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    // padding-left: -25px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url(${mobile});
    background-size: cover;
    background-position: left bottom;
  }
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
`;
