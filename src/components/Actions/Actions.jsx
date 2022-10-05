import React from "react";
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa'
import { formToggle } from "../../redux/features/formToggleSlice";
import { deleteNote } from "../../redux/features/notesSlice";
import { selectNotes } from "../../redux/features/notesSlice";
import { selectHighlight, setHighlight, setHighlightedNote} from "../../redux/features/highlightSlice";
import { useDispatch, useSelector } from "react-redux";
import './Actions.css'

export const Actions = () => {
    const highlight = useSelector(selectHighlight)
    const notes = useSelector(selectNotes)
    const dispatch = useDispatch()

    const handleFormToggle = () => {
        dispatch(formToggle(true))
    }

    const handleEdit = () => {
        if(highlight.highlight !== false) {
            dispatch(formToggle(true))
            const highlightedNote = notes.find(note => note.id === highlight.highlight)
            dispatch(setHighlightedNote({
                title: highlightedNote.title,
                content: highlightedNote.content
            }))
        }   
    }

    const handleDelete = () => {
        dispatch(deleteNote(highlight.highlight))
        dispatch(setHighlight(false))
    }

    return (
        <div className="actions">
            <button
                className="action"
                onClick={handleFormToggle}
                >
                <FaPlus className="icon"/>
            </button>

            <button
                className="action"
                onClick={handleEdit}
                >
                <FaPen className="icon"/>
            </button>

            <button
                className="action"
                onClick={handleDelete}
                >
                <FaTrash className="icon"/>
            </button>
        </div>
    ) 
}