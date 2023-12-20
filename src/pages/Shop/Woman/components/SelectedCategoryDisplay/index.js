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
        return fetchData();
    }, []);

    // console.log("The products are =>", products);
    items =
        products.find((product) => product.id === parseFloat(id)) ||
        products.find((product) => product.name === categoryName);
    // console.log("The items are =>", items);

    return (
        <Container className="category-container">
            <Flex
                direction="row"
                wrap="wrap"
                gap="9"
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
