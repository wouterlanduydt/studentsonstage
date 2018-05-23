import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
    width: auto;
  }
`;

const ContentWrap = styled.div`
  margin-left: 0;
  margin-top: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
    margin-left: 0.8em;
    margin-top: 0;
  }
`;

const StyledCountUp = styled(CountUp)`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 22px;
  }
`;

const Title = styled.span`
  font-size: 22px;
  display: block;
  margin-top: 4px;
`;

const calculateStartNumber = (number, x) => (x <= number ? number - x : 0);

const IntroStat = ({ icon, number, title }) => (
  <Wrap>
    <img src={icon} alt="" />
    <ContentWrap>
      <StyledCountUp
        start={number && calculateStartNumber(number, 30)}
        end={number}
        duration={1.5}
        useEasing={false}
        separator="."
      />
      <Title>{title}</Title>
    </ContentWrap>
  </Wrap>
);

export default IntroStat;
