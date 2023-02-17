import { useState } from "react";

function MessageInput({send}:{send:(val:string)=>void}) {
    const [value, setValue] = useState('')
    return (  <>
    <input placeholder="type your message" onChange={(e)=>setValue(e.target.value)} value={value} />
    <button onClick={()=>send(value)}>Send</button>
    </>);
}

export default MessageInput;