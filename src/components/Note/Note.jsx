import React from "react";
import { useState } from "react";
import './note.css'

export const Note = ({ title, content }) => {
    const [highlight, setHighlight] = useState(false)

    const handleHighlight = () => {
        setHighlight(!highlight)
    }

    return(
        <div 
            className={`noteContainer ${highlight ? 'active' : ''}`}
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