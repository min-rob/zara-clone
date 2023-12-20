import React from "react";
import "./styles.css";
import {
    Container,
    Grid,
    Card,
    Flex,
    Box,
    Inset,
    Text,
} from "@radix-ui/themes";

const CategoryCards = (props) => {
    const { name, price, img } = props;
    const imgPath = "../../../img/sweaters/";
    return (
        <Card size="2" variant="ghost">
            <Flex gap="3" className="card-content flex-col">
                <img
                    src={img}
                    alt="product"
                    className="block object-cover"
                    width={300}
                    height={200}
                />

                <Text as="label" size="3" align="left" className="">
                    {name}
                </Text>
                <Text as="p" size="2" align="left">
                    {price}
                </Text>
            </Flex>
        </Card>
    );
};

export default CategoryCards;
