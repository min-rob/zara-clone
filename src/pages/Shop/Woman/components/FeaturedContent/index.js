import React from "react";
import { Flex, Text, Container, Button, Card } from "@radix-ui/themes";
import PlaceHolder from "../../../../../assets/img/default-1.jpg";

const FeaturedContent = () => {
    return (
        <Flex
            direction="column"
            justify="center"
            width="100%"
            className="featured-content-wrapper overflow-x-auto"
        >
            <Flex
                justify="start"
                width="100%"
                className="hztl-slider-wrapper"
                height="100%"
            >
                <div className="hztl-main flex flex-col justify-end items-start relative">
                    <div className="hztl-content flex items-center justify-center text-white p-10">
                        <div className="flex flex-col justify-start items-start px-4 gap-6 content">
                            <h1 className="text-left text-8xl">Denim Jacket</h1>
                            <p className="text-left">
                                Lapel collar jacket with long sleeves with
                                buttoned cuffs. Flap pockets at chest and welt
                                pockets at hip. Washed effect. Front button
                                closure.
                            </p>
                            <Button
                                size="3"
                                variant="ghost"
                                className="text-white cursor-pointer"
                                highContrast
                                radius="large"
                                color="white"
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </Flex>
            {/* <img src={PlaceHolder} alt="placeholder" className=""></img> */}
        </Flex>
    );
};

export default FeaturedContent;
