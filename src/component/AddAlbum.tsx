import React, { FormEvent, useState } from 'react';

import {v4 as uuidv4} from 'uuid';
import ARTISTS from '../artist';

import Album from '../models/Album';

type Props = {
    onAddAlbum: (album: Album) => void;
}

const AddAlbum = ({onAddAlbum}:Props) =>{

    const [name_album,setName_album] = useState("");
    const [artist, setArtist] = useState("");
    const [year,setYear] = useState(0);
    const [nTracks,setNTracks] = useState(0);

    const handleSubmitAlbum = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        onAddAlbum({
            key_album: uuidv4(),
            name_album,
            artist,
            year,
            nTracks
        });
    };

    return(
        <form onSubmit={handleSubmitAlbum}>
            <label htmlFor="input-art">Artista:</label>
            <select id="input-art" onChange={(e)=>setArtist(e.target.value)}>
                    {ARTISTS.map((a)=>
                     <option key={a.key} value={a.key}>
                    {a.name}
                    </option>
                    )}
            </select><br/>
            <label htmlFor="input-ntrack">Número de tracks:</label>
            <input type="number" value={nTracks} onChange={(e)=>setNTracks(parseInt(e.target.value))}/><br/>
            <label htmlFor="input-nalbum">Nome:</label>
            <input type="text" value={name_album} onChange={(e)=>setName_album(e.target.value)}/><br/>
            <label htmlFor="input-year">Ano:</label>
            <input type="number" value={year} onChange={(e)=>setYear(parseInt(e.target.value))}/><br/>
            <button type="submit">Adicionar novo álbum</button>
        </form>
    );
}

export default AddAlbum;