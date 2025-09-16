import React from 'react';
import './Footer.css';



const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-note'>
      <p>&copy; {new Date().getFullYear()} Vasanthi. All Rights Reserved.</p>
      </div>
      
      
    </footer>
  )
}

export default Footer
