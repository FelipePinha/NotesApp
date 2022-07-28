import React from "react";
import { FaPlus } from 'react-icons/fa'
import './addButton.css'

export const AddButton = () => {
    return <button className="addBtn">Adicionar <FaPlus className="icon"/></button>
}