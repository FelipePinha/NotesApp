import React from "react";
import { Note } from "../Note/Note";
import { selectNotes } from "../../reducers/features/notesSlice";
import { useSelector } from "react-redux";
import './notes.css'

export const Notes = () => {
    const notes = useSelector(selectNotes)
    return(
        <article className="notesArticle">
            {notes.map(note => (
                <Note 
                    key={note.id} 
                    title={note.title} 
                    content={note.content}
                />
            ))}
        </article>
    )
}