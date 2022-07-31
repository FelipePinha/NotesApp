import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectHighlight, setHighlight } from "../../reducers/features/highlightSlice";
import './note.css'

export const Note = ({ title, content }) => {
    const highlight = useSelector(selectHighlight)
    const dispatch = useDispatch()

    const handleHighlight = () => {
        dispatch(setHighlight(highlight))
    }

    return(
        <div 
            className={`noteContainer ${highlight ? '' : 'active'}`}
            onClick={handleHighlight}
            >
            <div className="note">
                <h1 className="title">{title}</h1>
                <hr />
                <p className="content">
                    {content}     
                </p>
            </div>
        </div>
    )
}