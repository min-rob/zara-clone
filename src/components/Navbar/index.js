import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import ZaraLogo from "../../assets/img/zara-logo-wht.svg";
import MenuItem from "./components/MenuItem";
import { useLocation } from "react-router-dom";
import { Container, Flex, Grid } from "@radix-ui/themes";

const Navbar = () => {
    let current = false;
    const logoRef = useRef(null);
    const ctrRef = useRef(null);
    const rtRef = useRef(null);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const logoElement = logoRef.current;
        const imgElement = logoElement.querySelector("img");
        switch (currentPath) {
            case "/":
                current = true;
                imgElement.setAttribute("height", 500);
                imgElement.setAttribute("width", 400);
                logoElement.classList.add("justify-center");
                console.log("Currently on the Home page: ", current);

                break;
            case "/woman/*":
                current = true;
                console.log("Currently on the Woman page: ", current);
                break;
            case "/man/*":
                current = true;
                console.log("Currently on the Man page: ", current);
                break;
            case "/kids/*":
                current = true;
                console.log("Currently on the Kids page: ", current);
                break;
            default: {
                console.log("No match");
            }
        }
    }, []);

    return (
        <nav
            className="grid grid-cols-3 fixed z-10 w-full text-white py-5"
            id="navbar"
        >
            <div
                className="lt-nav flex justify-start items-center"
                id="logo-container"
                ref={logoRef}
            >
                <a href="/">
                    <img
                        src={ZaraLogo}
                        alt="logo-blk"
                        height={100}
                        width={75}
                    />
                </a>
            </div>
            <div className="ctr-nav flex flex-col justify-start items-center gap-3">
                <ul
                    className="menu-item-list flex items-center gap-12"
                    id="nav-item-container"
                >
                    <MenuItem item="Woman" link="/woman" />
                    <MenuItem item="Man" link="/man" />
                    <MenuItem item="Kids" link="/kids" />
                </ul>
            </div>
            <div className="rt-nav flex justify-end items-start gap-10 text-lg">
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-primary">Shopping cart</button>
            </div>
        </nav>
    );
};

export default Navbar;
