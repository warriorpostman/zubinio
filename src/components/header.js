import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        marginTop: '.5rem',
        maxWidth: 960,
        padding: `.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: '0rem .5rem 0rem 0rem' }}>
        <Link
          to="/"
          style={{
            color: 'inherit',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
