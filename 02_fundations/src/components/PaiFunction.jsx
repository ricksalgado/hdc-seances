import React from 'react'
import SunFunction from './SunFunction';

const PaiFunction = () => {
    const handleClick = () => {
        console.log('Clicked at sun`s function');
    };

    return (
    
    <div>
      <SunFunction onChildClick={handleClick}/>
    </div>
  )
}

export default PaiFunction
