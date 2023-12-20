import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

const CategoryItem = (props) => {
    const { link, item } = props;
    const location = useLocation();
    const isActive = location.pathname === link;
    return (
        <li className="category-item-list">
            <a
                href={link}
                className={`category-items ${isActive ? "current" : ""}`}
            >
                {item}
            </a>
        </li>
    );
};

export default CategoryItem;
