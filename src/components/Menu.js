import React from "react"
import Link from "gatsby-link"
import Logo from "../images/Github-Mark-64px.png"

const Menu = () => (
    <div className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link to="/cv/">CV</Link>
        </li>
        <li className='menu__item'>
          <a href="https://raclims.wordpress.com/">Blog</a>
        </li>
        <li className='menu__item__empty'>
          <a href="https://github.com/raclim">
          <img className="logo" src={Logo} alt="Rachel's Github Page" />
          </a>
        </li>
      </ul>
    </div>
)

export default Menu