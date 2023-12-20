import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CategoryItems = (props) => {
    const { link, item, id, selected, action } = props;

    return (
        <li className="category-item-list" key={id}>
            <Link
                onClick={action}
                to={link}
                className={`category-items ${selected ? "selected" : ""}`}
            >
                {item}
            </Link>
        </li>
    );
};

export default CategoryItems;
