import React from "react";
import { Note } from "../Note/Note";
import './notes.css'

export const Notes = () => {
    return(
        <article className="notesArticle">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </article>
    )
}