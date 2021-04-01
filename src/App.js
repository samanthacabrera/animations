import React from 'react';
import './App.css';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

function App() {
  
  const [items, setItems] = useState([]);
  
  const transition = useTransition(items, {
    from: { x: 0, y: 0, opacity: 1},
    enter: item => (next) => (
      next({ x: -100, y: item.y, opacity: 1, delay: item.delay})
    ),
    leave: { x: 100, y: 0, opacity: 1}
  });

  return (
    <div className='App'>

      <h1>Make <br/> us <br/> move</h1>
      
      <button onClick={() => {
        setItems(v => v.length ? [] : [
          { y: -150, delay: 200 },
          { y: 0, delay: 400 },
          { y: 150, delay: 600 }
        ]);
        
      }}>click me</button>
      
      <div className='Container'>
        
        {transition((style, item) => item ? 
          <animated.div innertext='Make' style={style} className='Item' /> : '')}

      </div>
    </div>
  );
}

export default App;
