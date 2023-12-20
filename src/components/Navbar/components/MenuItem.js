import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

const MenuItem = (props) => {
    const { link, item } = props;
    const location = useLocation();
    // console.log(location.pathname);
    const isActive = location.pathname.includes(link);
    // console.log(
    //     "The current url =>",
    //     location.pathname,
    //     "this includes the link =>",
    //     link,
    //     isActive
    // );

    return (
        <li className="menu-item-list">
            <a
                href={link}
                className={`menu-items ${isActive ? "current" : ""}`}
            >
                <Link to={link}>{item}</Link>
            </a>
        </li>
    );
};

export default MenuItem;
