import { useState } from "react";

import AddStreaming from "../component/AddStreaming";
import StreamingItem from "../component/StreamingItem";
import Streaming from "../models/Streaming";
import STREAMING from "../streaming";

import '../style.css';

export function StreamingPage(){

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

    return(
        <div className="streaming">
                    
        <div>
            <strong>Serviços de streaming</strong><br/>
            {
                isAddingStreaming && <AddStreaming onAddStreaming={handleAddStreaming}/>
            }
            <button onClick={() => setAddingStreaming(true)}>Adicionar Serviço de Streaming</button>
            <br />
            <div className="bloco">
                {
                    streaming.map(streaming =>(
                        <StreamingItem  key={streaming.key_streaming} streaming={streaming}  onRemoveStreaming={handleRemoveStreaming} />
                    ))
                }
            </div>
        </div>
    </div>
    );
}