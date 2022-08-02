import React from "react";
import { Actions } from "../Actions/Actions";
import './header.css'

export const Header = () => {
    return(
        <header className="header">
            <h1 className="logo">
                <span>SUPA</span>
                NOUTO
            </h1>

            <Actions />
        </header>
    )
}