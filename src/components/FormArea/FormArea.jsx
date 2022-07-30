import React, { useState } from "react";
import { FaCheck, FaSlash} from 'react-icons/fa'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import { InputError } from "../InputError/InputError";
import './formArea.css'

export const FormArea = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {
        console.log('CHECK')
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
                    onChange={handleTitleChange}
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
                    onChange={handleContentChange}
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