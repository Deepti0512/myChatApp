import React from 'react'

const Search = () =>{
    return(
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a user' name="" id="" />
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/9961339/pexels-photo-9961339.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <div className="userChatInfo">
                    <span>Deepti</span>
                </div>
            </div>
        </div>
    )
}

export default Search