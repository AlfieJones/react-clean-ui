import React, { useState } from "react";
import { ThemeToggleProps } from "./ThemeToggle.types";
import "./ThemeToggle.scss";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onChange, sunShowing = true }) => {
    const [checked, setChecked] = useState(sunShowing);
    const onToggle = (e: any) => {
        setChecked(e.target.checked);
        if(onChange != null)
            onChange(e.target.checked);
    }
    return (
        <label className={"switchTheme"}>
            <span className={"lblTxt"}>Theme toggle</span>
            <input type="checkbox" checked={checked} onChange={onToggle}/>
            <div id={"sunMoon"} className={"sunMoon"}>
                <div className={"circle"}></div>
                <span className={"ray one"}></span>
                <span className={"ray two"}></span>
                <span className={"ray three"}></span>
                <span className={"ray four"}></span>
                <span className={"ray five"}></span>
                <span className={"ray six"}></span>
                <span className={"ray seven"}></span>
                <span className={"ray eight"}></span>
            </div>
        </label>
    )
};

export default ThemeToggle;

