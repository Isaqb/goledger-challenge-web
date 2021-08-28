import React, { useState } from "react";
import ARTISTS from "../artist";
import Album from "../models/Album";

type Props = {
    album: Album;
    onRemoveAlbum: (key_album: string) => void;
}

const AlbumItem = ({album,onRemoveAlbum}:Props) =>{
    const [artists, setArtists] = useState(ARTISTS);
    const filteredArtists = (album.artist).length === 0 ? [] : artists.filter(
        artist => artist.key.includes(album.artist)
    );

    return(
       <div>
        <p>Nome do álbum:{album.name_album}</p>
        <p>Ano:{album.year}</p>
        <p>Número de faixas:{album.nTracks}</p>
        <p>Artista:{filteredArtists.map(f=>f.name)}</p>
        <button onClick={()=> onRemoveAlbum(album.key_album)}>Excluir Album</button>
    </div> 
    );
    
};

export default AlbumItem;