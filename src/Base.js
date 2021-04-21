import React from 'react'
import { NavLink } from 'react-router-dom'
const Base = ({
    title="",
    children
}) => {
    return (
        <div>
            <nav className="flex justify-between mx-3">
                <div className="flex">SCOREZ</div>
                <div className="flex">
                    <NavLink to="/">one</NavLink>
                    <NavLink to="/">one</NavLink>
                    <NavLink to="/">one</NavLink>
                    <NavLink to="/">one</NavLink>
                </div>
            </nav>
            children
            <footer>
                footer
            </footer>
        </div>
    )
}

export default Base
