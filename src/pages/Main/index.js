import React from "react";
import "./styles.css";
import { Button } from "@radix-ui/themes";
import Navbar from "../../components/Navbar";

const Main = () => {
    const handleMouseEnter = (event) => {
        const element = event.target;
        if (element.classList.contains("slide-content")) {
            element.classList.add("active");
        }
        const child = element.querySelector(".slide-content");
        child.classList.add("active");
    };

    const handleMouseLeave = () => {
        const child = document.querySelector(".slide-content.active");
        child.classList.remove("active");
    };

    return (
        <>
            <Navbar />
            <main
                className="flex min-h-screen flex-col items-center justify-between"
                id="main"
            >
                <div className="slide-container flex flex-row items-center justify-start min-w-full">
                    <div
                        className="main-slider flex flex-col justify-end items-start relative"
                        data-slide="1"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="slide-content flex items-center justify-center absolute text-white p-10"
                            data-content="1"
                        >
                            <div className="flex flex-col justify-start items-start px-4 gap-6 content">
                                <h1 className="text-left text-8xl">
                                    Denim Jacket
                                </h1>
                                <p className="text-left">
                                    Lapel collar jacket with long sleeves with
                                    buttoned cuffs. Flap pockets at chest and
                                    welt pockets at hip. Washed effect. Front
                                    button closure.
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
                    <div
                        className="main-slider flex flex-col justify-end items-start relative"
                        data-slide="2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="slide-content flex items-center justify-center absolute text-white p-10"
                            data-content="2"
                        >
                            <div className="flex flex-col justify-start items-start px-4 gap-6 content">
                                <h1 className="text-8xl">Denim Jacket</h1>
                                <p>
                                    Lapel collar jacket with long sleeves with
                                    buttoned cuffs. Flap pockets at chest and
                                    welt pockets at hip. Washed effect. Front
                                    button closure.
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
                    <div
                        className="main-slider flex flex-col justify-end items-start relative"
                        data-slide="3"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="slide-content flex items-center justify-center absolute text-white p-10"
                            data-content="3"
                        >
                            <div className="flex flex-col justify-start items-start px-4 gap-6 content">
                                <h1 className="text-8xl">Denim Jacket</h1>
                                <p>
                                    Lapel collar jacket with long sleeves with
                                    buttoned cuffs. Flap pockets at chest and
                                    welt pockets at hip. Washed effect. Front
                                    button closure.
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
                    <div
                        className="main-slider flex flex-col justify-end items-start relative"
                        data-slide="4"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="slide-content flex items-center justify-center absolute text-white p-10"
                            data-content="4"
                        >
                            <div className="flex flex-col justify-start items-start px-4 gap-6 content">
                                <h1 className="text-8xl">Denim Jacket</h1>
                                <p>
                                    Lapel collar jacket with long sleeves with
                                    buttoned cuffs. Flap pockets at chest and
                                    welt pockets at hip. Washed effect. Front
                                    button closure.
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
                </div>
            </main>
        </>
    );
};

export default Main;
