import { useState } from "react";

import ALBUM from "../album";
import AddAlbum from "../component/AddAlbum";
import AlbumItem from "../component/AlbumItem";
import Album from "../models/Album";

import '../style.css';

export function AlbumPage(){

    
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

    return(
        <div className="albuns">
        <div>
            <strong>Lista de álbuns</strong><br/>
            {
                isAddingAlbum && <AddAlbum onAddAlbum={handleAddAlbum}/>
            }
            <button onClick={()=> setAddingAlbum(true)}>Adicionar novo album</button>
            <br />
            <div className="bloco">
                {
                    album.map(album =>(
                        <AlbumItem key={album.key_album} album={album} onRemoveAlbum={handleRemoveAlbum} />
                    ))
                }
            </div>
        </div>
    </div>
    );
}