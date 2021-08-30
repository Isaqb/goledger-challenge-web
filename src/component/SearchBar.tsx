import React, { useState } from 'react';

import ALBUM from '../album';
import ARTISTS from '../artist';
import STREAMING from '../streaming';
import AlbumItem from './AlbumItem';
import ArtistItem from './ArtistItem';
import StreamingItem from './StreamingItem';

import '../style.css';

function SearchBar(){
    const [artists, setArtists] = useState(ARTISTS);
    const [searchArtist, setSearchArtist] = useState('');
    
    const filteredArtists = searchArtist.length === 0 ? [] : artists.filter(
        artist => artist.name.toLowerCase().includes(searchArtist.toLowerCase())
    );

    const handleRemoveArtist = (removeArtistKey: string) =>{
        setArtists( artists =>
                artists.filter(artist => artist.key !== removeArtistKey)
            );
    };

    const [album,setAlbum] = useState(ALBUM);
    const [searchAlbum,setSearchAlbum] = useState('');

    const filteredAlbum = searchAlbum.length === 0 ? [] : album.filter(
        album => album.name_album.toLowerCase().includes(searchAlbum.toLowerCase())
    );

    const handleRemoveAlbum = (removeAlbKey:string) =>{
        setAlbum( album =>
                album.filter(a=>a.key_album !== removeAlbKey)
            );
    }

    const [streaming, setStreaming] = useState(STREAMING);
    const [searchStreaming,setSearchStreaming] = useState('');

    const filteredStreaming = searchStreaming.length === 0 ? [] : streaming.filter(
        streaming => streaming.name_streaming.toLowerCase().includes(searchStreaming.toLowerCase())
    );

    const handleRemoveStreaming = (removeStrKey: string) =>{
        setStreaming( streaming =>
                streaming.filter(str => str.key_streaming !== removeStrKey)
            );
    }

    
    const [op,setOp] = useState("searchArtist");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        event.preventDefault();
        setOp(event.target.value);
        if (op==="searchArtist"){
            setSearchArtist(event.target.value)
        }
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        if (op==="searchArtist"){
            setSearchArtist(event.target.value)
        }
        if (op==="searchStreaming"){
            setSearchStreaming(event.target.value)
        }
        if (op==="searchAlbum"){
            setSearchAlbum(event.target.value)
        }
        
    }

    return(
        <>
            
            <form >
                <input type="text" placeholder='Faça sua busca ' onChange={(e)=>handleSearch(e)}/>
                    <select defaultValue="searchArtist" onChange={handleChange}>
                        <option  value="searchArtist">Artista</option>
                        <option value="searchStreaming">Streaming</option>
                        <option value="searchAlbum">Album</option>
                    </select>
            </form>
            <div >
                <ul>
                    {
                       op === 'searchArtist' ? (filteredArtists.map( f =>(
                        <ArtistItem  key={f.key} artist={f} onRemoveArtist={handleRemoveArtist}  />))):
                        (op === 'searchStreaming'?(
                            filteredStreaming.map(s=>
                                <StreamingItem key={s.key_streaming} streaming={s} onRemoveStreaming={handleRemoveStreaming} />)
                        ):(op==='searchAlbum'?(filteredAlbum.map(a =>
                            <AlbumItem key={a.key_album} album={a} onRemoveAlbum={handleRemoveAlbum} />)
                        ):[]))
                    }
                </ul>
            </div>
        </>
    );
}

export default SearchBar;