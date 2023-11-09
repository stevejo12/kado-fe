import React, { useState } from 'react';

import "./Wishlist.scss";

const Wishlist = () => {
  const [userHeaderPictureLink, setUserHeaderPictureLink] = useState<string>("");

  return (
    <div className='wishlist-container'>
      <div className="wishlist-userHeader">
        {userHeaderPictureLink && 
          <img src={userHeaderPictureLink} alt="userHeader" />
        }
      </div>
      <div className="wishlist-content">
        <div className="wishlist-userProfile">
          <span className='wishlist-userAvatar'>
            <img 
              src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt=""
              className='wishlist-userAvatar-img'
            />
          </span>
          <div className="wishlist-userNameTag">
            <span className="wishlist-userName">Jeco Star</span>
            <span className="wishlist-userTag">@jecostar</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist