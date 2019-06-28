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
  padding: 1rem;
  margin: 1rem;
  width: 10%;
  flex: ${props => props.boxValue};
  background-color: blue;
`;

const Daddy = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: ${(props) => props.direction};
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
        Flexbox is sweet, or so I'm told.
      </p>
      <Button 
        onClick={(e) => {
        console.log('whatup', e.target.value);
        setDirection(direction === 'column' ? 'row' : 'column');
        }}
      >
        Direction?
      </Button>
      <InputLabel htmlFor="box1">BOX 1</InputLabel>
      <TextField 
        id="box1"
        type="text"
        value={boxValue.box1}
        onChange={(e) => { 
        setBoxValue({ ...boxValue, box1: e.target.value })
        }
        }
      />
      <InputLabel htmlFor="box1">BOX 2</InputLabel>
      <TextField 
        id="box2"
        type="text"
        value={boxValue.box2}
        onChange={(e) => { 
        setBoxValue({ ...boxValue, box2: e.target.value })
        }
        }
      />
      <InputLabel htmlFor="box1">BOX 3</InputLabel>
      <TextField 
        id="box3"
        type="text"
        value={boxValue.box3}
        onChange={(e) => { 
        setBoxValue({ ...boxValue, box3: e.target.value })
        }
        }
      />

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
