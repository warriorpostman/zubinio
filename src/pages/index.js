import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import Joyride from 'react-joyride';

import styled from 'styled-components';
import Card from '../components/Card';

const IndexContainer = styled.div`
  display: flex;

  & > div {
    margin-left: 1rem;
    flex: 1;
  }

  & > div:first-child {
    flex: 2;
  }
`;


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`zubin`, `dog`]} />
    <IndexContainer>
      <div>
        <Card>
          <h2 className="j-target">
            `flexbox`
          </h2>
          <p>
            A simple demo of flexbox because I still don't get it...
            <Link to="/flexbox/">flexbox</Link> 
          </p>
        </Card>
        <Card>
          <h2 className="j-target">
            `ease`
          </h2>
          <p>
            Using `ease` functions with CSS...
            <Link to="/ease/">ease</Link> 
          </p>
        </Card>
        <Card>
          <h2 className="j-target">
            SVG Stuff
          </h2>
          <p>
            Some SVG demonstrations...
            <Link to="/svgs/">SVG's</Link> 
          </p>
        </Card>
        <Card>
          <h2>
            Compound Interest
          </h2>
          <p>
            A simple demo to play around with 
            calculating <Link to="/compound-interest/">compound interest</Link>. 
            Needs work though, if we're going to be honest.
          </p>
        </Card>
      </div>
      <div>
        <Card>
          <div>
            <Image  />
          </div>
        </Card>
        <Card>
          <p>
            This site is a sandbox for some web experiments. 
            It's also a tribute to my old dog Zubin who 
            passed away in 2017.
          </p>
        </Card>
      </div>
    </IndexContainer>
  </Layout>
)

export default IndexPage
