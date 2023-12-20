import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

const SelectedCategoryDisplay = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return <div>index</div>;
};

export default SelectedCategoryDisplay;
