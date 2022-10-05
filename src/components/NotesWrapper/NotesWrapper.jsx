import React from "react";
import { FormArea } from "../FormArea/FormArea";
import { useSelector } from 'react-redux'
import { selectFormActive } from "../../redux/features/formToggleSlice";
import './notesWrapper.css'

export const NotesWrapper = ({ children }) => {
    const formIsOpen = useSelector(selectFormActive)

    return (
        <section className="notesSection">
            { children }
            {formIsOpen.formActive ? <FormArea /> : ''}
        </section>
    )
}