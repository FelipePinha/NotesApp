import React from "react";
import { FaPlus } from 'react-icons/fa'
import { formToggle, selectFormActive } from "../../reducers/features/formToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import './addButton.css'

export const AddButton = () => {
    const selectForm = useSelector(selectFormActive)
    const dispatch = useDispatch()

    const handleFormToggle = () => {
        dispatch(formToggle(selectForm))
    }

    return <button
             className="addBtn"
             onClick={handleFormToggle}
             >
                Adicionar
                <FaPlus className="icon"/>
            </button>
}