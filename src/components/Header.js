import React from 'react';
import NameDisplay from './NameDisplay';

function Header() {
  return (
    <div className='header'>
      <NameDisplay />
      <h2>This is my first React App</h2>
      <p>Coded by Joel Watson</p>
    </div>
  );
}

export default Header;
