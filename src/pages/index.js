import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Emoji from "../components/Emoji"
import SEO from "../components/Seo"
import "../styles/index.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="love" keywords={['rachel lim', 'itp', 'creative', 'developer']} />
    <div className='about'>
      <p className='intro'> creative <Emoji symbol="🌝" label="rainbow"/> developer <Emoji symbol="💫" label="rainbow"/></p>
      <p className='intro__detail'>I craft with vulnerability and humor. I love sharing a good giggle <Emoji symbol="🌈" label="rainbow"/>.</p>
      <p className='intro__detail'>Currently, I am a Master's Candidate at NYU's <a href="https://tisch.nyu.edu/itp">Interactive Telecommunications Program</a>.</p>
    </div>
    <Projects></Projects>
  </Layout>
)

export default IndexPage
