import React from 'react'
import attach from "../img/attachFile.png"
import pic from "../img/addAvatar.png"

const Input = () =>{
    return(
        <div className='input'>
            <input type="text" placeholder="Type your message here..." name="" id="" />
            <div className="send">
                <img src = {attach} alt="" />
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <img src={pic} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input