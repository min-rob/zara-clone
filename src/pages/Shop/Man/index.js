import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import CategoryItem from "./components/CategoryItems";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SelectedCategoryDisplay from "./components/SelectedCategoryDisplay";
import { fetchCategories } from "../../../utils/api/fetchCategories";

const Man = () => {
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const height = document.querySelector("#navbar").offsetHeight;
        setNavbarHeight(height);
        const fetchData = async () => {
            const data = await fetchCategories(0);
            setCategories(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="page-wrapper" style={{ paddingTop: navbarHeight }}>
                <div className="container">
                    <div className="category text-white flex flex-col justify-center items-center gap-4 pt-3 flex-wrap fixed">
                        <ul className="category-list flex gap-5">
                            {categories.map((category) => {
                                return (
                                    <CategoryItem
                                        link={`/woman/${category.name}`}
                                        item={category.name}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                    <div className="items-main"></div>
                </div>
            </div>
            <Routes>
                <Route path="/" Component={SelectedCategoryDisplay} />
                <Route path="/shop/woman" Component={SelectedCategoryDisplay} />
            </Routes>
        </>
    );
};

export default Man;
