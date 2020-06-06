import React from 'react';

import Header from './components/Header';
import Graphic from './components/Graphic';
import Content from './components/Content';
import picture from './pic.jpeg';
import picture1 from './pic1.jpeg';

import './styles/styles.scss';

function App() {
  let caption = 'Its a graphic';
  return (
    <div className='App'>
      <Header />
      <Content />
      <Graphic picture={picture} alt={caption} />
      <Graphic picture={picture1} alt={caption} />
    </div>
  );
}

export default App;
