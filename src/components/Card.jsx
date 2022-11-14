import styled from 'styled-components';
import { useState } from 'react';

import { Rating } from 'react-simple-star-rating';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 550px;
  padding: 5px;
  margin: 50px;
  color: black;

  box-shadow: 1px 1px 5px 2px grey;
`;

const Image = styled.div`
  width: 100%;
  height: 50%;
  background-color: grey;
`;

const TitleSection = styled.div`
  width: 100%;
  height: 50%;
`;

const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 10px;
`;

const Title2 = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 10px;
`;
const SubtitleSection = styled.div`
  width: 100%;
  height: 35%;
  border-top: 1px solid grey;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Li = styled.li`
  padding: 5px 7px;
  margin-right: 10px;
  background-color: rgb(235, 235, 235);
  list-style: none;
  border-radius: 10px;
`;
const Span = styled.span`
  color: rgb(141, 77, 243);
`;

export function Ratings() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };

  return (
    <div className="App">
      {/* set initial value */}
      <Rating onClick={handleRating} initialValue={rating} />

      <button onClick={handleReset}>reset</button>
    </div>
  );
}

function Card() {
  return (
    <CardContainer>
      <Image />
      <TitleSection>
        <Title>Title </Title>
        <Rating />

        <Title2>Secondary text</Title2>
        <p>Lorem ipsum dolor adipisicing elit. Modi</p>
      </TitleSection>
      <SubtitleSection>
        <Title2>Subtitles</Title2>
        <Ul>
          <Li>Item1</Li>
          <Li>Item2</Li>
          <Li>Item3</Li>
          <Li>Item4</Li>
        </Ul>
        <Title2>
          <Span>ACTION 1</Span>
        </Title2>
      </SubtitleSection>
    </CardContainer>
  );
}
export default Card;
