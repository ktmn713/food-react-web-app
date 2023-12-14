import React from "react";
import { Link, useLocation } from "react-router-dom";



function Nav() {
    const links =
        ["Home",
            "Cuisines",
            "Ingredients",
            "Tips",
            "Search",
            "Profile"];

    const { pathname } = useLocation();

    return (
        <div className="nav-bar-ul">
            <div className="nav-bar-li">
        {links.map((link, index) => (

          <Link
            key={index}
            to={`/${link}`}
            className={`nav-bar-a
            ${pathname.includes(link)}`}>
            {link}

        
          </Link>
        ))}

      </div>
        </div>

    );
}
export default Nav;