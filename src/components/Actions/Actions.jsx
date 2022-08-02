import React from "react";
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa'
import { formToggle, selectFormActive } from "../../reducers/features/formToggleSlice";
import { deleteNote } from "../../reducers/features/notesSlice";
import { selectHighlight} from "../../reducers/features/highlightSlice";
import { useDispatch, useSelector } from "react-redux";
import './Actions.css'

export const Actions = () => {
    const selectForm = useSelector(selectFormActive)
    const highlight = useSelector(selectHighlight)
    const dispatch = useDispatch()

    const handleFormToggle = () => {
        dispatch(formToggle(selectForm))
    }

    const handleDelete = () => {
        dispatch(deleteNote(highlight))
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