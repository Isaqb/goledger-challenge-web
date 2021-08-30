import { useState } from "react";

import ARTISTS from "../artist";
import AddArtist from "../component/AddArtist";
import ArtistItem from "../component/ArtistItem";
import Artist from "../models/Artist";

import '../style.css';

export function ArtistPage(){

    const [isAddingArtist, setAddingArtist] = useState(false);
    const [artists, setArtists] = useState(ARTISTS);
   
    const handleRemoveArtist = (removeArtistKey: string) =>{
        setArtists( artists =>
                artists.filter(artist => artist.key !== removeArtistKey)
            );
    };

    const handleAddArtist = (artist: Artist) =>{
        setArtists(artists => artists.concat(artist));
        setAddingArtist(false);
    };


    return(
        <div className="artistas">
        <div>
            <strong>Artistas</strong><br/>
            {
                isAddingArtist && <AddArtist onAddArtist={handleAddArtist}/>
            }
            <button onClick={()=> setAddingArtist(true)}>Adicionar novo artista</button>
            <br />
            <div className="bloco">
                {
                    artists.map(artist =>(
                        <ArtistItem key={artist.key} artist={artist} onRemoveArtist={handleRemoveArtist} />
                    ))
                }   
            </div>
           
        </div>
    </div>
    );

}