import React from "react";
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa'
import { formToggle, selectFormActive } from "../../reducers/features/formToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import './Actions.css'

export const Actions = () => {
    const selectForm = useSelector(selectFormActive)
    const dispatch = useDispatch()

    const handleFormToggle = () => {
        dispatch(formToggle(selectForm))
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
                >
                <FaTrash className="icon"/>
            </button>
        </div>
    ) 
}