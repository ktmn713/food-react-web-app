import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style.css";
import CurrentUser from "../Profile/users";
import { useSelector } from "react-redux";



function Nav() {
    const links =
        ["Home",
            "Cuisines",
            "Ingredients",
            "Tips",
            "Search",
            "Profile"];

    const { currentUser } = useSelector((state) => state.userReducer);


    const { pathname } = useLocation();
    return (
        <div className="nav-bar-ul">
            {/* <div className="nav-bar-li">

                {links.map((link, index) => (

                    <Link
                        key={index}
                        to={`/${link}`}
                        className={`nav-bar-a
                ${pathname.includes(link)}`}>
                        {link}


                    </Link>
                ))}

            </div> */}

            <div className="nav-bar-li">
                <Link to="/"> Home</Link>
                {!currentUser && (
                    <>
                        <Link to="/signin">Signin</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
                {currentUser && (
                    <Link to="/account">Account</Link>
                )}
                <Link to="/search">Search</Link>
                <Link to="/users">Users</Link>

            </div>
        </div>



    );
}
export default Nav;
