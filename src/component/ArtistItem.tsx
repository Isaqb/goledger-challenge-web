import React from 'react';

import Artist from "../models/Artist";

type Props = {
    artist: Artist;
    onRemoveArtist: (key: string) => void;
}


const ArtistItem = ({artist,onRemoveArtist}: Props) =>(
        <div>
            <p>Nome: {artist.name} </p>
            <p>Localização: {artist.location} </p>
            <p>Descrição: {artist.description} </p>
            <button onClick={()=> onRemoveArtist(artist.key)}>
                Excluir Artista
            </button>
            <button>Editar</button>
        </div>
  
);

export default ArtistItem ;