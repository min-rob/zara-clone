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
        <Card asChild size="1" variant="ghost">
            <Flex gap="3" className="card-content flex-col" mx="5" my="2">
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
