import React from 'react';
import { Link } from "react-router-dom";

export default function Nav({getNavInput}) {
    return (
        <div className="nav__container">
            <ul className="nav__bar">
                < li className="nav__item">
                    <Link to="/projects"> [P] Projects </Link>
                </li>
                <li className="nav__item">
                    <Link to="/resume"> [R] Resume </Link>
                </li>
                <li className="nav__item">
                    <Link to="/github"> [G] Github </Link>
                </li>
                <li className="nav__item">
                    <Link to="/blog"> [B] Blog </Link>
                </li>
            </ul>

            <form className="nav__inputFormat" onSubmit={getNavInput}>
                <label htmlFor="choice">[8:88 PM] Enter your choice:  </label>
                <input id="nav__input" name="choice" type="text" />
            </form>
        </div>
    )
}