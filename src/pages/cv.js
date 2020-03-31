import React from "react"
import "../styles/index.scss"
import Link from "gatsby-link"

import Layout from "../components/Layout"

const Resume = () => {
  return(
    <Layout>
      <div className="cv">
        <div className="cv__category">
          <h2 className="cv__head">Education</h2>
            <h3 className="position">New York University Tisch School of the Arts</h3>
              <p className="info">M.P.S from Interactive Telecommunications Program</p>
              <p className="date">Class of 2020</p>
            <h3 className="position">New York University College of Arts and Science</h3>
              <p className="info">B.A in Art History, Minor in Web Programming and Applications</p>
              <p className="date">Class of 2018</p>
        </div>
        <div className="cv__category">
          <h2 className="cv__head">Experience</h2>
            <h3 className="position">NYU ITP Graduate Assistant</h3>
              <p className="info">Assisted with weekly feedback and grading for Dan Shiffman’s online Code! courses.</p>
              <p className="info">Organized office hours and help sessions for introductory Javascript and <a href="https://p5js.org/">p5.js</a>.</p>
              <p className="date">January 2020 - Present</p>
            <h3 className="position">NYU Gallatin Digital Accessibility Assistant</h3>
              <p className="info">Audited and remediated faculty websites according to WCAG 2.0 standards.</p>
              <p className="info">Workshopped with students and faculty to produce accessible websites and media.</p>
              <p className="info">Generated instructional guides for creating accessible digital assets.</p>
              <p className="date">September 2018 - Present</p>
            <h3 className="position">Google Summer of Code (Processing Foundation) Student</h3>
              <p>Programmed a <Link to="/p5-search-bar/">search function</Link> for the p5 web editor with React.js and Redux.js.</p>
              <p className="date">May 2019 - August 2019</p>
            <h3 className="position">Solomon R. Guggenheim Museum Interactive Intern</h3>
              <p className="info">Analyzed with Google Analytics most effective app functions and drafted data reports <br></br> 
              for <a href="https://www.guggenheim.org/exhibition/art-and-china-after-1989-theater-of-the-world">Art and China after 1989: Theater of the World</a> 
              and <a href="https://www.guggenheim.org/exhibition/josef-albers-in-mexico">Josef Albers in Mexico</a>.</p>
              <p className="info">Planned bluetooth beacon placement according to artwork, exhibition design, and architecture.</p>
              <p className="info">Performed quality assurance testing and edits for app before launching each update.</p>
              <p className="date">September 2017 - December 2017</p>
            <h3 className="position"> NEW INC Administration and Operations Intern</h3>
              <p className="info">Designed easily readable maps for visitors at events and refined photos for publication</p>
              <p className="info">Expedited operations for Winter Showcase, Versions 2017, Hackathon and Open Call</p>
              <p className="date">September 2017 - December 2017</p>
        </div>
        <div className="cv__category">
          <h2 className="cv__head">Extra</h2>
            <h3 className="position">NYU Kendo Club Team Captain</h3>
              <p className="info">Lead weekly practices, tournament preparation, and instruction for national-winning teams</p>
              <p className="date">September 2017 - May 2018</p>
        </div>
        <div className="cv__category">
        <h2 className="cv__head">Skills</h2>
          <div className="skill__contain">
            <div className = "skills">
            <h3 className="position">Coursework</h3>
              <p>Web Design + Development</p>
              <p>Creative Coding</p>
              <p>Physical Computing</p>
              <p>Digital Fabrication</p>
            </div>
            <div className = "skills">
            <h3 className="position">Technical</h3>
              <p>Javascript</p>
              <p>React/Redux</p>
              <p>Node.js</p>
              <p>HTML/CSS</p>
              <p>Python</p>
              <p>Git</p>
            </div>
            <div className = "skills">
            <h3 className="position">Software</h3>
              <p>Adobe CC</p>
              <p>Unity</p>
              <p>Arduino</p>
              <p>Sketch</p>
            </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}


export default Resume