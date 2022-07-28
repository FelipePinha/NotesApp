import React from "react";
import { FaCheck, FaSlash} from 'react-icons/fa'
import './formArea.css'

export const FormArea = () => {
    return (
        <form className="form">

            <div className="inputContainer">
                <label htmlFor="title">Título</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="content">Conteúdo</label>
                <textarea 
                    type="text" 
                    id="content"
                    name="content"
                    rows={15}
                    cols={30}
                    maxLength={580}
                />
            </div>

            <div className="formActions">
                <button type="submit" className="btn submitBtn"><FaCheck /></button>
                <button type="button" className="btn cancelBtn"><FaSlash /></button>
            </div>
        </form>
    )
}