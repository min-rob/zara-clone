import React from "react";

const Searchbar = () => {
    return (
        <form className="my-2 w-full">
            <input
                placeholder="Search..."
                id="search"
                className="pl-1 w-full"
            />
        </form>
    );
};

export default Searchbar;
