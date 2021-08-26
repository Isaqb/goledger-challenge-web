import React, { FormEvent, useState } from 'react';
import ARTISTS from '../artist';
import ArtistItem from './ArtistItem';

function SearchBar(){
    const [artists, setArtists] = useState(ARTISTS);
    const [search, setSearch] = useState('');
    
    const filteredArtists = search.length === 0 ? [] : artists.filter(
        artist => artist.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleRemoveArtist = (removeArtistKey: string) =>{
        setArtists( artists =>
                artists.filter(artist => artist.key !== removeArtistKey)
            );
    };

    return(
        <>
            <input type="text" value={search} placeholder='Faça sua busca 'onChange={(e) => setSearch(e.target.value)}/>

            <div>
                <ul>
                    {filteredArtists.map( f =>(
                        <ArtistItem  key={f.key} artist={f} onRemoveArtist={handleRemoveArtist}  />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SearchBar;