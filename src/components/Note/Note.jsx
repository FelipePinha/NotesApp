import React from "react";
import './note.css'

export const Note = ({ title, content }) => {
    return(
        <div className="noteContainer">
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