import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Chart from '../components/Chart';

const CompoundInterest = () => (
  <Layout>
    <SEO title="Compound interest" keywords={[
      `compound interest`, 
      `saving`, 
      `finance`
      ]} />
    <p>
      Compound interest is sweet. It takes a little bit of stuff
      and turns it into a lot of stuff. The graphs below will help
      visualize the growth of money via the compound interest formula.
    </p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Chart  
        data={[ 5, 7, 11, 17, 29, 37 ]} 
        size={[500,100]}
      />
    </div>
  </Layout>
)

export default CompoundInterest
