import React, { useState } from 'react'

const TextInput = () => {
    const [text, setText] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    };

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();

        console.warn('Form Submited')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" velue={text} onChange={handleChange} />
            <p>{text} </p>
            <button type='submit'>Submit</button>

        </form>
    )
}

export default TextInput
