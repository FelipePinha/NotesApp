import React from "react";
import { FormArea } from "../FormArea/FormArea";
import { useSelector } from 'react-redux'
import { selectFormActive } from "../../reducers/features/formToggleSlice";
import './notesWrapper.css'

export const NotesWrapper = ({ children }) => {
    const formActive = useSelector(selectFormActive)

    return (
        <section className="notesSection">
            { children }
            {formActive ? '' : <FormArea />}
        </section>
    )
}