import React, { useState } from 'react'
import styled from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ZButton } from './compound-interest';

import Card from '../components/Card';

const SvgStep = styled.div`
  margin-top: 1rem;
  border-radius: 5px;

  display: flex;
  p {
    flex: 3;
  }

  & > svg {
    flex: 1;
  }

`;

const SVG = () => {
  return (
    <Layout>
      <SEO title="SVG Demo" keywords={
        [
        `ease`, `demonstration`, `css`
        ]
        } />
      <Card>
        <h2>SVGs</h2>
        <p>
          We should be using SVGs all the time.
        </p>

        <SvgStep>
          <svg viewBox="0 0 20 20">
            <circle 
              cx="10" cy="10" 
              r="10" 
              fill="white" />
          </svg>
          <p>
            White circle: Okay cool, it's a simple circle SVG. Basically 
            consists of origin coordinates, a radius and a fill color of white.
          </p>
        </SvgStep>

        <SvgStep>
          <svg viewBox="0 0 20 20">
            <ellipse 
              cx="10" 
              cy="10" 
              rx="8" 
              ry="4"
              fill="black"
              stroke="purple"
              strokeWidth={1} 
            />
            </svg>
            <p>
              A black ellipse: Basic ellipse SVG. Consists of
              origin coordinates, an x-radius, y-radius and a fill 
              color of black. Throw in a purple meniscus. Just do that.
            </p>
          </SvgStep>
        <SvgStep>
          <svg viewBox="0 0 20 20">
            
            <ellipse 
              cx="10" 
              cy="10" 
              rx="8" 
              ry="4"
              fill="black"
            />
            <circle 
              cx="10" cy="10" 
              r="4" 
              fill="white" />
            </svg>
            <p>
              A black ellipse, with an embedded white circle
              Combined circle and ellipse with coordinates like above.
              Kinda looks like a musical whole note.
            </p>
        </SvgStep>
      </Card>
    </Layout>
  );
}  

export default SVG
