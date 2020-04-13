import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <div>
          <h1
            style={{
              ...scale(1),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#006080`,
              }}
              to={location.pathname === blogPath ? `/blog/` : `/`}
            >
              {title}
            </Link>
          </h1>
        </div>
      )
    } else {
      header = (
        <h1
          style={{
            ...scale(1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#006080`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h1>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(40),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              display: "flex",
              height: "4rem",
              justifyContent: "space-around",
              alignItems: "center",
              background: "#f7f7f7",
              marginBottom: "4rem",
              borderBottom: "1px solid black",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#006080`,
              }}
              to="/"
            >
              <img
                style={{ margin: 0, width: 40 }}
                src="/js-icon.png"
                alt="js logo"
              />
            </Link>

            {header}
            <div style={{ fontSize: "1.6rem" }}>
              <Link
                to="/blog"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `#006080`,
                }}
              >
                Blog
              </Link>
            </div>
          </header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.reactjs.org"
          >
            React js
          </a>
          {` and `}
          <a
            href="https://www.gatsbyjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gatsby
          </a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
