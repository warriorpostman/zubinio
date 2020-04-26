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
  width: 90%;

  & > p {
    padding-top: 8%;
    padding-left: 10%;
    // margin-left: 1rem;
    flex: 3;
    height: 100%;
    text-align: middle;
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
            Ellipses with SVG: Basic ellipse SVG. Consists of
            origin coordinates, an x-radius, y-radius and a fill 
            color of black. Throw in a purple meniscus. Just do that.
          </p>
        </SvgStep>
        <SvgStep>
          <svg viewBox="0 0 20 20">
            <ellipse 
              cx="10" 
              cy="10" 
              rx="7.5" 
              ry="5"
              fill="black"
            />
            <circle 
              cx="10" cy="10" 
              r="4.5" 
              fill="white" />
            </svg>
            <p>
              More Ellipses with SVG: A black ellipse, with an embedded white circle
              Combined circle and ellipse with coordinates like above.
              If you play music, this might look like a familiar icon?
            </p>
        </SvgStep>
        <SvgStep>
          <svg viewBox="0 0 20 20">
            
            <ellipse 
              cx="10" 
              cy="10" 
              rx="7.5" 
              ry="5"
              fill="black"
            />
            <ellipse 
              cx="6" cy="13" 
              rx="4"
              ry="5"
              fill="white" 
              transform="rotate(-20)"
            />
            </svg>
            <p>
              Similar to above (black ellipse), but with an embedded white ellipse and hit it with a transform, 
              Does it kind of look like a musical whole note? 
              The visual configuration of this SVG is still unappealing though.
            </p>
          </SvgStep>
      </Card>
    </Layout>
  );
}  

export default SVG
