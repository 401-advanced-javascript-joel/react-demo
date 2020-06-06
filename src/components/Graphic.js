import React from 'react';
function Graphic({ picture, caption }) {
  return (
    <div className='graphic'>
      <img src={picture} alt={caption} />
    </div>
  );
}

export default Graphic;
