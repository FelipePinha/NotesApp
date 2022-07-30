import React, { useState } from "react";
import { FaCheck, FaSlash} from 'react-icons/fa'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import { InputError } from "../InputError/InputError";
import { addNote } from "../../reducers/features/notesSlice";
import { useDispatch } from 'react-redux'
import { nanoid } from "@reduxjs/toolkit";
import './formArea.css'

export const FormArea = () => {
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
                    {...register('content')}
                />
            </div>

            <div className="formActions">
                <button type="submit" className="btn submitBtn"><FaCheck /></button>
                <button type="button" className="btn cancelBtn"><FaSlash /></button>
            </div>
        </form>
    )
}