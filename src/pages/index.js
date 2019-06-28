import React from "react"
import MuiLink from '@material-ui/core/Link';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`zubin`, `dog`]} />
    <div className="index-container">
      <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Zubin
          </Typography>
          <div className="zubin-pic">
            <Image  />
          </div>
          This site is a sandbox for some web experiments. 
          It's also a tribute to my old dog Zubin who 
          passed away in 2017.
        </CardContent>
      </Card>
    </div>
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Compound Interest
          </Typography>
          A simple demo to play around with 
          calculating <Link to="/compound-interest/">compound interest</Link> 
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            `flexbox`
          </Typography>
          A simple demo of flexbox because I still don't get it...
          <Link to="/flexbox/">flexbox</Link> 
        </CardContent>
      </Card>
    </div>
    </div>
  </Layout>
)

export default IndexPage
