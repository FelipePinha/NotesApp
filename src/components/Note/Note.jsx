import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectHighlight, setHighlight, setHighlightedNote } from "../../reducers/features/highlightSlice";
import './note.css'

export const Note = ({ title, content, id }) => {
    const highlight = useSelector(selectHighlight)
    const dispatch = useDispatch()

    const handleClick = () => {
        if(highlight.highlight === id) {
            dispatch(setHighlight(false))
            dispatch(setHighlightedNote({ title: '', content: '' }))
        } else {
            dispatch(setHighlight(id))
        }
    }

    return(
        <div 
            className={`noteContainer ${highlight.highlight === id && 'active'}`}
            onClick={handleClick}
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