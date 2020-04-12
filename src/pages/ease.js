import React, { useState } from 'react'
import styled from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ZButton } from './compound-interest';

import Card from '../components/Card';

const Daddy = styled.div`
  margin-top: 1rem;
  boder-radius: 5px;

  & > div {
    transition-timing-function: ease-out;
    transition: 0.5s;

    padding: 0.5rem;
    color: pink;
    background-color: gray;
    visibility: hidden;
    opacity: 0;
  }

  & > div.show {
    opacity: 1;
    visibility: visible;
    border: 1px solid;
  }
`;

const Ease = () => {
  const [hide, hideElement] = useState(true);

  return (
    <Layout>
      <SEO title="Ease Demo" keywords={
        [
        `ease`, `demonstration`, `css`
        ]
        } />
      <Card>
      <h2>`ease` Demo</h2>
      <p>
          CSS Ease is sweet. You can use it to define the transition between two CSS states. This is a simple demonstration of using an `ease` function with visibility/opacity. 
      </p>
          <ZButton 
            primary
            alt="Hide/show"
            onClick={(e) => {
            console.log('whatup', e.target.value);
            hideElement(!hide);
            }}
          >
            {"Hide or Show"}
          </ZButton>

        <Daddy>
          <div className={hide ? '' : 'show'}>
              showing! is me...
          </div>
        </Daddy>
      </Card>
    </Layout>
  );
}  

export default Ease
