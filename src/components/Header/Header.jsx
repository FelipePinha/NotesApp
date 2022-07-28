import React from "react";
import { AddButton } from "../AddButton/AddButton";
import './header.css'

export const Header = () => {
    return(
        <header className="header">
            <h1 className="logo">
                <span>SUPA</span>
                NOUTO
            </h1>

            <AddButton />
        </header>
    )
}