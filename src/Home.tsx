import React, { useState } from 'react';
import ALBUM from './album';

import ARTISTS from './artist';
import AddAlbum from './component/AddAlbum';
import AddArtist from './component/AddArtist';
import AddStreaming from './component/AddStreaming';
import AlbumItem from './component/AlbumItem';
import ArtistItem from './component/ArtistItem';
import SearchBar from './component/SearchBar';
import StreamingItem from './component/StreamingItem';
import Album from './models/Album';
import Artist from './models/Artist';
import Streaming from './models/Streaming';
import STREAMING from './streaming';
import './style.css';

const Home = () =>{

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

    const [isAddingStreaming,setAddingStreaming] = useState(false);
    const [streaming, setStreaming] = useState(STREAMING);

    const handleAddStreaming = (str: Streaming) =>{
        setStreaming(streaming => streaming.concat(str));
        setAddingStreaming(false);
    }

    const handleRemoveStreaming = (removeStrKey: string) =>{
        setStreaming( streaming =>
                streaming.filter(str => str.key_streaming !== removeStrKey)
            );
    }

    const [album,setAlbum] = useState(ALBUM);
    const [isAddingAlbum,setAddingAlbum] = useState(false);

    const handleAddAlbum = (al: Album) =>{
        setAlbum(album => album.concat(al));
        setAddingAlbum(false);
    }

    const handleRemoveAlbum = (removeAlbKey:string) =>{
        setAlbum( album =>
                album.filter(a=>a.key_album !== removeAlbKey)
            );
    }


    return (
        <div>
            <div> 
                <SearchBar/>
            </div>
            <div id="body">
                <div id="albuns">
                    <div>
                        <strong>Lista de álbuns</strong><br/>
                        {
                            isAddingAlbum && <AddAlbum onAddAlbum={handleAddAlbum}/>
                        }
                        <button onClick={()=> setAddingAlbum(true)}>Adicionar novo album</button>
                        <br />
                        <div id="bloco">
                            {
                                album.map(album =>(
                                    <AlbumItem key={album.key_album} album={album} onRemoveAlbum={handleRemoveAlbum} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id="artistas">
                    <div>
                        <strong>Artistas</strong><br/>
                        {
                            isAddingArtist && <AddArtist onAddArtist={handleAddArtist}/>
                        }
                        <button onClick={()=> setAddingArtist(true)}>Adicionar novo artista</button>
                        <br />
                        <div id="bloco">
                            {
                                artists.map(artist =>(
                                    <ArtistItem key={artist.key} artist={artist} onRemoveArtist={handleRemoveArtist} />
                                ))
                            }   
                        </div>
                       
                    </div>
                </div>
                <div id="streaming">
                    
                    <div>
                        <strong>Serviços de streaming</strong><br/>
                        {
                            isAddingStreaming && <AddStreaming onAddStreaming={handleAddStreaming}/>
                        }
                        <button onClick={() => setAddingStreaming(true)}>Adicionar Serviço de Streaming</button>
                        <br />
                        <div id="bloco">
                            {
                                streaming.map(streaming =>(
                                    <StreamingItem  key={streaming.key_streaming} streaming={streaming}  onRemoveStreaming={handleRemoveStreaming} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;