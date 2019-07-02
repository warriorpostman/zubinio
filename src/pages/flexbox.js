import React, { useState } from 'react'
import styled from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ZButton, ZInput } from './compound-interest';

import Card from '../components/Card';

const FirstBox = styled.div`
  font-family: Courier !important;
  text-align: center;
  // font-family: 'Verdana';
  font-size: smaller;
  color: white;
  padding: .5rem;
  margin: .25rem;
  flex: ${props => props.boxValue};
  background-color: #0080ff;
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
    box4: 1, box5: 1
  });

  return (
    <Layout>
      <SEO title="Flexbox Demo" keywords={
        [
        `flexbox`, `demonstration`
        ]
        } />
      <Card>
      <h2>Interactive `flexbox` Demo</h2>
      <p>
        Flexbox is sweet, or so I'm told. This is a simple demonstration 
        of `flexbox`. You can modify the parameters below to try out 
        different layouts. Go ahead and tweak the flex values below to see 
        how it works.
      </p>
      <InputBar>
      { [1, 2, 3, 4, 5].map(index => 
        <InputWrapper>
          <label htmlFor="box1">BOX {index}</label>
          <ZInput 
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
          <ZButton 
            primary
            alt="Toggle the flex direction"
            onClick={(e) => {
            console.log('whatup', e.target.value);
            setDirection(direction === 'column' ? 'row' : 'column');
            }}
          >
            {"Flex Direction"}
          </ZButton>
        </InputWrapper>
      </InputBar>

        <Daddy 
          direction={direction}
        >
          {[1, 2, 3, 4, 5].map(index =>
          <FirstBox key={`box-${index}`} boxValue={boxValue[`box${index}`]} >
            flex: {boxValue[`box${index}`]}
          </FirstBox>
          )}
        </Daddy>
      </Card>

    </Layout>
  );
}  

export default Flexbox
