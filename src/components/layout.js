/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <Top
          style={{
            margin: `0 auto`,
            marginTop: '.5rem',
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main style={{
            flex: '10',
            }}>
            {children}
          </main>
          <footer
            style={{
            flex: '1',
            }}
          >
            WHAT Hail Zubin
          </footer>
        </Top>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
