import React from "react"
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from "gatsby"
import "../styles/index.scss"

const Projects = () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulPortfolioWork {
          edges {
            node {
              id
              title
              materials
              thumbnail {
                fluid (maxWidth: 300) {
                    ...GatsbyContentfulFluid
                }
              }
              body {
                body
              }
              url
              slug
            }
          }
        }
      }
  `)
  return(
    <ul className="list">
        {data.allContentfulPortfolioWork.edges.map((edge) => {
          return (
            <li className="list__object" key={edge.node.id}>
                <p className="list__object__topic">{edge.node.materials}</p>
                <div className="list__image">
                  <Img 
                    fluid={edge.node.thumbnail.fluid}
                  ></Img>
                </div>
                <div className="list__object__label">
                  <Link className="list__label" to={`${edge.node.slug}`}>
                    {edge.node.title}
                </Link>
                </div>
            </li>
          )
        })}
    </ul>
  )
}


export default Projects