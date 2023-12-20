import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Theme accentColor="gray">
        <App />
    </Theme>
);
