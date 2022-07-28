import React, { Children } from "react";
import './notesWrapper.css'

export const NotesWrapper = ({ children }) => {
    return (
        <section className="notesSection">
            { children }
        </section>
    )
}