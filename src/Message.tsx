function Message({message}:{message:string[]}) {
    return ( <div>
        {
            message.map((message, index)=>
            <div>{message}</div>
            
            )
        }
    </div> );
}

export default Message;