import React, { useEffect, useRef, useState } from 'react'
import FacebookShareIcon from "../../assets/facebook-share.png";
import TwitterShareIcon from "../../assets/Twitter-share.png";

import "./Wishlist.scss";
import Alert from '../../components/Alert/Alert';

// TO DO
/**
 * 
 * 
 */
const Wishlist = () => {
  const [totalWishes, setTotalWishes] = useState<number>(16);
  const [wishlistPrivacy, setWishlistPrivacy] = useState<string>("public");
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const handleAlertClose = (isUserAgree: boolean) => {
    // if user's agree to changes. no further action needed
    if (isUserAgree) {
      setAlertOpen(false);
      return;
    }

    // when user disagree, revert back to previous privacy setting
    setWishlistPrivacy(() => {
      let val = wishlistPrivacy;
      if (val === "public") {
        val = "private";
      } else {
        val = "public";
      }

      return val;
    });
    setAlertOpen(false);
  };

  // console.log("current alert", alertOpen);

  // share link
  // https://www.tutorialspoint.com/how-to-create-a-share-button-with-different-social-handles-using-html-and-css
  return (
    <div className="wishlist">
      <div className="wishlist-left">
        <div className="wishlist-info">
          <span className="wishlist-userInfo">My Wishlist{" "}</span>
          <span className='wishlist-total'>({totalWishes} items)</span>
        </div>
        <div className="wishlist-shareLink">
          <img src={FacebookShareIcon} alt="facebookIcon" />
          <img src={TwitterShareIcon} alt="twitterIcon" />
        </div>
      </div>
      <div className="wishlist-right">
        <div className='wishlist-privacyTitle'>Wishlist Privacy</div>
        <div className='wishlist-privacyChoice'>
          <input 
            type="radio" 
            name="privacy" 
            id="public"
            value="public"
            checked={wishlistPrivacy === "public"}
            onClick={() => setAlertOpen(true)}
            onChange={() => setWishlistPrivacy("public")}
          />
          <label htmlFor="public">Public</label>
          <input 
            type="radio" 
            name="privacy" 
            id="private"
            value="private"
            checked={wishlistPrivacy === "private"}
            onClick={() => setAlertOpen(true)}
            onChange={() => setWishlistPrivacy("private")}
          />
          <label htmlFor="private">Private</label>
        </div>
      </div>
      <Alert
        open={alertOpen}
        title="Changing Wishlist Privacy"
        message='You are about to change your wishlist privacy. Are you sure?'
        onClose={() => handleAlertClose(false)}
        onConfirm={() => handleAlertClose(true)}
        onAbort={() => handleAlertClose(false)}
      />
    </div>
  )
}

export default Wishlist;