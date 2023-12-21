import React from "react";
import {
    Flex,
    Select,
    SelectLabel,
    SelectTrigger,
    Text,
} from "@radix-ui/themes";

const FilterMenu = () => {
    return (
        <Flex className="filter-container" justify="end" px="6" align="center">
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
                <Text size="2" align="center" className="text-white">
                    Filter
                </Text>
            </div>
            <div className="filter-options-container text-white">
                <ul className="filter-options flex gap-4">
                    <li>
                        <Text size="2">Color</Text>
                    </li>
                    <li>
                        <Text size="2">Size</Text>
                    </li>
                    <li>
                        <Text size="2">Prize</Text>
                    </li>
                </ul>
            </div>
        </Flex>
    );
};

export default FilterMenu;
