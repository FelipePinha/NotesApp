import React from "react";
import { FaCheck, FaSlash} from 'react-icons/fa'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import { InputError } from "../InputError/InputError";
import { addNote } from "../../reducers/features/notesSlice";
import { formToggle, selectFormActive } from "../../reducers/features/formToggleSlice"
import { selectHighlight } from '../../reducers/features/highlightSlice'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from "@reduxjs/toolkit";
import './formArea.css'

export const FormArea = () => {
    const selectForm = useSelector(selectFormActive)
    const highlight = useSelector(selectHighlight)
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(addNote({
            id: nanoid(),
            title: data.title,
            content: data.content
        }))
    }

    const validationSchema = yup.object({
        title: yup.string().required(),
        content: yup.string().required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver(validationSchema) })

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <div className="inputContainer">
                <label htmlFor="title">
                    Título
                    {errors.title && <InputError />}
                </label>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                    defaultValue={highlight.highlightedNote.title}
                    {...register('title')}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="content">Conteúdo
                    {errors.content && <InputError />}
                </label>
                <textarea 
                    type="text" 
                    id="content"
                    name="content"
                    rows={15}
                    cols={30}
                    maxLength={580}
                    defaultValue={highlight.highlightedNote.content}
                    {...register('content')}
                />
            </div>

            <div className="formActions">
                <button type="submit" className="btn submitBtn"><FaCheck /></button>
                <button 
                    onClick={() => dispatch(formToggle(selectForm))}
                    type="button" 
                    className="btn cancelBtn"
                    >
                        <FaSlash />
                </button>
            </div>
        </form>
    )
}