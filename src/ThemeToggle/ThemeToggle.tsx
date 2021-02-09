import React from "react";

import { ThemeToggleProps } from "./ThemeToggle.types";

import "./ThemeToggle.scss";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ }) => (
    <div data-testid="ThemeToggle" className={"fooBar"}>bar</div>
);

export default ThemeToggle;

