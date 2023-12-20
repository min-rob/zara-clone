import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import CategoryItems from "./components/CategoryItems";
import "./styles.css";
import SelectedCategoryDisplay from "./components/SelectedCategoryDisplay";
import { fetchCategories } from "../../../utils/api/fetchCategories";
import { Container } from "@radix-ui/themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Woman = () => {
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCategories(1);
            setCategories(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const height = document.querySelector("#navbar").offsetHeight;
        setNavbarHeight(height);
    }, []);

    const handleSelectCategory = (e) => {
        const selectedCategory = e.target;
        // console.log("The selected category is =>", selectedCategory.innerText);
        const categoryObj = categories.find((category) => {
            return category.name === selectedCategory.innerText;
        });
        const categoryId = categoryObj.id;
        setCategoryId(categoryId);
        let name = categoryObj.name.replace(/\s*\|\s*/g, "-");
        setCategoryName(name);
    };
    // console.log("the category id is =>", categoryId);
    // console.log("the useParams id is =>", id);

    return (
        <Container>
            <Navbar />
            <div
                className="page-wrapper flex flex-col justify-start items-center"
                style={{ paddingTop: navbarHeight }}
            >
                <div
                    className="category text-white flex flex-col justify-center items-center gap-4 pt-3 px-28 flex-wrap w-full"
                    id="category"
                >
                    <ul className="category-list flex gap-3 mb-5 justify-start">
                        {categories.map((category) => {
                            const categoryNameFormatted = category.name.replace(
                                /\s*\|\s*/g,
                                "-"
                            );
                            return (
                                <CategoryItems
                                    id={category.id}
                                    selected={categoryId === category.id}
                                    action={handleSelectCategory}
                                    link={`/woman/${category.id}/${categoryNameFormatted}`}
                                    item={category.name}
                                />
                            );
                        })}
                    </ul>
                </div>
                <div className="items-main flex">
                    <Routes>
                        <Route
                            path=":id/:categoryName"
                            element={<SelectedCategoryDisplay />}
                        />
                    </Routes>
                    {/* <SelectedCategoryDisplay id={categoryId} /> */}
                </div>
            </div>
        </Container>
    );
};

export default Woman;
