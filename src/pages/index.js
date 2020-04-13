import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Janagale Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./js.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my personal Blog.</p>
        <p>
          This is simple Blog developed for Learning and Teaching Web
          Development
        </p>
        <h4>Specially I focus on</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            marginBottom: "3rem",
          }}
        >
          <Button>HTML</Button>
          <Button>CSS</Button>
          <Button>JavaScript</Button>
          <Button>React JS</Button>
          <Button>Gatsby</Button>
          <Button>PWA</Button>
          <Button>Web Components</Button>
          <Button>UI & UX Design</Button>
        </div>
        <p>
          To read posts click{" "}
          <span role="img" aria-label="hand poining up">
            👆{" "}
          </span>
          link in menu, or below{" "}
          <span role="img" aria-label="hand poining up">
            👇
          </span>
        </p>
        <Link to="/blog/">
          <button
            style={{
              marginTop: "35px",
              border: "none",
              borderRadius: ".5rem",
              cursor: "pointer",
              color: `#006080`,
              fontWeight: "bolder",
              padding: ".5rem 1rem",
            }}
          >
            Go to Blog
          </button>
        </Link>
      </Layout>
    )
  }
}

const Button = styled.button`
  border: none;
  border-radius: 3px;
  margin: 12px 5px;
  color: teal;
  cursor: pointer;
  padding: 2px 6px;
  &:hover {
    color: green;
    font-weight: bolder;
    background: #ccc;
  }
`

export default IndexPage
