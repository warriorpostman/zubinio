import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`zubin`, `dog`]} />
    <p>
      This site is a sandbox for my web experiments. 
      It's also a tribute to my old dog Zubin who 
      passed away in 2017.
    </p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Learn about <Link to="/compound-interest/">compound interest</Link> 
    </p>
  </Layout>
)

export default IndexPage
