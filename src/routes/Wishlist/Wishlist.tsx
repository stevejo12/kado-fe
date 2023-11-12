import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

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
        <div className="wishlist-userBioSocials">
          <p className='wishlist-userBio'>
            Hello I am a streamer who also models acts and loves sports/fitness. I love all my followers because o am blessed with the nicest and most supportive group ever!
          </p>
          <div className="wishlist-userSocials">
            <a className='wishlist-userSocials-link' target='_blank'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className='wishlist-userSocials-link' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className='wishlist-userSocials-link' target='_blank'>
              <FontAwesomeIcon icon={faTwitch}/>
            </a>
          </div>
        </div>
      </div>
      <div className="wishlist-listContainer">
        <div className="wishlist-listTab">
          <a className="wishlist-list">
            <FontAwesomeIcon icon={faGift}/>
            <p>Wishlist</p>
          </a>
          <a className="wishlist-list">
            <p>Gifters</p>
            <span>3</span>
          </a>
        </div>
      </div>
      <div className="wishlist-content">
      </div>
    </div>
  )
}

export default Wishlist