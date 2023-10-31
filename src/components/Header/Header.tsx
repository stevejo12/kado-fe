import React from 'react'

import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
      <img 
        src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/logo.png" 
        alt="Company Logo"
      />
      <div className="productSearchContainer">
        <form action="#!" className="productSearchOptions">
          <select></select>
          <input type="text" />
          <button type='submit' className='btn btn-primary'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Header