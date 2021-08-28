import React from "react";
import Streaming from "../models/Streaming";

type Props = {
    streaming: Streaming;
    onRemoveStreaming: (key_streaming: string) => void;
}

const StreamingItem = ({streaming, onRemoveStreaming}: Props) =>{
    return(
        <div>
            <p>Nome do serviço:{streaming.name_streaming}</p>
            <button onClick={()=>onRemoveStreaming(streaming.key_streaming)}>Excluir Streaming</button>
        </div>
    );
}

export default StreamingItem;