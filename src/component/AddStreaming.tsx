import React, { FormEvent, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import Streaming from "../models/Streaming";

type Props = {
    onAddStreaming: (streaming: Streaming) => void;
}

const AddStreaming = ({onAddStreaming}: Props) =>{

    const [name_streaming,setName_streaming] = useState("");

    const handleSubmitStreaming = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onAddStreaming({
            key_streaming: uuidv4(),
            name_streaming
        });
    }

    return(
        <form onSubmit={handleSubmitStreaming}>
            <label htmlFor="input-str" >Nome:</label>
            <input id="input-str" type="text" value={name_streaming} onChange={(e) => setName_streaming(e.target.value)} /><br/>
            <button type="submit">Adicionar novo streaming</button>
        </form>
    );
};

export default AddStreaming;