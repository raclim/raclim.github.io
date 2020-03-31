import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as PropTypes from "prop-types"
import '../styles/index.scss'
import { BLOCKS} from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class Page extends React.Component {
  render() {
    const post = this.props.data.contentfulPortfolioWork;

    const firstRichContent = post.childContentfulPortfolioWorkBodyRichTextNode.json;
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          let url = node.data.target.fields.file['en-US'].url;
          let alt = node.data.target.fields.file['en-US'].fileName;
          return <div className="imageBox"><img className='image' src={url} width='67%' alt={alt}/></div>
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
          return <p className='text'>{children}</p>
        }, 
        [BLOCKS.UL_LIST]: (node, children) => {
          return <li className='page__list'>{children}</li>
        }, 
        [BLOCKS.H2]: (children) => {
          return <h2 className='page__h2'>{children}</h2>
        }, 
      }
    }

    return (
      <Layout>
        <div className="page">
          <h1 className="page__header">{post.title}</h1>
          <p className="page__topics">{post.materials}</p>
          <div className="page__content">
            <div className="page__text">
              {documentToReactComponents(firstRichContent, options)}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

Page.propTypes = propTypes

export default Page

export const pageQuery = graphql`
  query PortfolioWorkBySlug ($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPortfolioWork(slug: {eq: $slug}) {
      id
      title
      materials
      thumbnail {
        fixed (width: 150){
          ...GatsbyContentfulFixed
        }
      }
      childContentfulPortfolioWorkBodyRichTextNode {
        json
      }
    }
  }
`