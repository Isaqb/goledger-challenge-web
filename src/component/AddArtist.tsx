import React, { useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Artist from '../models/Artist';

type Props = {
    onAddArtist: (artist: Artist) => void;
}

const AddArtist = ({onAddArtist}:Props) =>{
    const [description,setDescription] = useState("");
    const [location,setLocation] = useState("");
    const [name,setName] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        onAddArtist({
            key : uuidv4(),
            name,
            location,
            description
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="input-location">Localização:</label>
            <input id="input-location" type="text" value={location} onChange={(event)=>setLocation(event.target.value)}/><br/>
            <label htmlFor="input-desc">Descrição:</label>
            <input id="input-desc" type="text" value={description} onChange={(event)=>setDescription(event.target.value)}/><br/>
            <label htmlFor="input-name">Nome:</label>
            <input id="input-name" type="text" value={name} onChange={(event)=>setName(event.target.value)}/><br/>
            <button type="submit">Criar Artista</button>
        </form>
    );
}

export default AddArtist;