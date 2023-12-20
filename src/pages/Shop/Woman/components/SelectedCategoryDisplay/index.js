import React, { useEffect, useState } from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";
import { fetchCategories } from "../../../../../utils/api/fetchCategories";
import {
    Container,
    Grid,
    Card,
    Flex,
    Box,
    Inset,
    Text,
} from "@radix-ui/themes";
import CategoryCards from "./CategoryCards";
import { useParams } from "react-router-dom";

const SelectedCategoryDisplay = () => {
    const { id, categoryName } = useParams();
    // console.log("The useParams id is =>", id);
    // console.log("The useParams categoryName is =>", categoryName);
    let items = {};
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCategories(1);
            setProducts(data);
        };
        fetchData();
    }, []);

    // console.log("The products are =>", products);
    items =
        products.find((product) => product.id === parseFloat(id)) ||
        products.find((product) => product.name === categoryName);
    // console.log("The items are =>", items);

    return (
        <Container className="category-container">
            <Flex
                className="filter-container"
                justify="end"
                px="6"
                align="center"
            >
                <div className="filter-btn flex gap-1 p-1 mx-2 justify-center align-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        dataSlot="icon"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                        />
                    </svg>
                    <Text className="text-white">Filter</Text>
                </div>
                <div className="filter-options-container text-white">
                    <ul className="filter-options flex gap-4">
                        <li>
                            <Text>Color</Text>
                        </li>
                        <li>
                            <Text>Size</Text>
                        </li>
                        <li>
                            <Text>Prize</Text>
                        </li>
                    </ul>
                </div>
            </Flex>
            <Flex
                direction="row"
                wrap="wrap"
                justify="center"
                align="start"
                className="card-wrapper text-white py-10"
            >
                {items &&
                    items.inventory.map((product) => {
                        // console.log("The product is =>", product.img_path);
                        const imgPath = `/imgs/woman/${items?.id}/`;
                        return (
                            <CategoryCards
                                img={`${imgPath}${product.img_path}`}
                                name={product.name.toUpperCase()}
                                price={`$${product.price}`}
                            />
                        );
                    })}
            </Flex>
        </Container>
    );
};

export default SelectedCategoryDisplay;
