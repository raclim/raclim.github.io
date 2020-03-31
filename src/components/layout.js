import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Menu from "./Menu"
import Emoji from "./Emoji"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className='layout'>
        <div className='layout__nav'>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
        </div>
        <main className='layout__main'>{children}</main>
        <footer className='layout__footer'>
          Made with {` `}
          <Emoji symbol="🍑" label="peach"/>
          <Emoji symbol="✨" label="shine"/>{new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.contentful.com/">Contentful</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
