import React from 'react'

const Message = () =>{
    return(
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/9961339/pexels-photo-9961339.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://images.pexels.com/photos/2422557/pexels-photo-2422557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    )
}

export default Message