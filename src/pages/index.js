import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <p>This is simple Blog developed for Learning and Teaching Web</p>
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

export default IndexPage
