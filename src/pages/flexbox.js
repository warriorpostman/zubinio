import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, TextField, InputLabel } from '@material-ui/core';
import { Link } from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";

const FirstBox = styled.div`
  text-align: center;
  font-family: 'Verdana';
  font-size: larger;
  color: white;
  padding: .5rem;
  margin: .25rem;
  width: 10%;
  flex: ${props => props.boxValue};
  background-color: blue;
`;

const Daddy = styled.div`
  margin-top: 1rem;
  border: 1px solid;
  margin-left: .5rem;
  margin-right: .5rem;
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

const InputBar = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputWrapper = styled.div`
  flex: 1
  padding: 1rem;
`;

const Flexbox = () => {
  const [direction, setDirection] = useState('row');
  const [boxValue, setBoxValue] = useState({ 
    box1: 1, box2: 1, box3: 1, 
    box4: 1, box5: 1, box6: 1
  });

  return (
    <Layout>
      <SEO title="Flexbox Demo" keywords={
        [
        `flexbox`, `demonstration`
        ]
        } />
      <p>
        Flexbox is sweet, or so I'm told. This is a simple demonstration 
        of `flexbox`. You can modify the parameters below to try out 
        different layouts.
      </p>
      <h4>Flex values</h4>
      <InputBar>
      { [1, 2, 3, 4, 5, 6].map(index => 
        <InputWrapper>
          <InputLabel htmlFor="box1">BOX {index}</InputLabel>
          <TextField 
            id={`box${index}`}
            type="text"
            value={boxValue[`box${index}`]}
            onChange={(e) => { 
            setBoxValue({ ...boxValue, [`box${index}`]: e.target.value })
            }
            }
          />
        </InputWrapper>
        )
        }
        <InputWrapper>
          <Button 
            primary
            alt="Toggle the flex direction"
            onClick={(e) => {
            console.log('whatup', e.target.value);
            setDirection(direction === 'column' ? 'row' : 'column');
            }}
          >
            Direction?
          </Button>
        </InputWrapper>
      </InputBar>

      <Daddy 
        direction={direction}

      >
        {[1, 2, 3, 4, 5, 6].map(index =>
        <FirstBox key={`box-${index}`} boxValue={boxValue[`box${index}`]} >
          {index}
        </FirstBox>
        )}
      </Daddy>

    </Layout>
  );
}  

export default Flexbox
