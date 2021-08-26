import React, { useEffect, useState } from 'react';

import ARTISTS from './artist';
import AddArtist from './component/AddArtist';
import ArtistItem from './component/ArtistItem';
import SearchBar from './component/SearchBar';
import Artist from './models/Artist';
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

    

    return (
        <div>
            <div>
                <SearchBar/>
            </div>
            <div id="body">
                <div id="albuns">
                    <div>
                        <strong>Lista de álbuns</strong><br/>
                        <form >
                            <label>Artista:</label>
                            <input type="text"/><br/>
                            <label>Número de tracks:</label>
                            <input type="text"/><br/>
                            <label>Nome:</label>
                            <input type="text"/><br/>
                            <label>Ano:</label>
                            <input type="text"/><br/>
                            <button>Adicionar novo álbum</button>
                        </form>
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
                        {
                            artists.map(artist =>(
                                <ArtistItem key={artist.key} artist={artist} onRemoveArtist={handleRemoveArtist} />
                            ))
                        }
                    </div>
                </div>
                <div id="streaming">
                    
                    <div>
                        <strong>Serviços de streaming</strong><br/>
                        <form >
                            <label>Nome:</label>
                            <input type="text"/><br/>
                            <button>Adicionar novo streaming</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;