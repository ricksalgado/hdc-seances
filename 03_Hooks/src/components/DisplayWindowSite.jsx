import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

const DisplayWindowSite = () => {
  const {width, height} = useWindowSize()
  
  
    return (
    <div>
      <h3>Display Window size</h3>
      <p>The window's height is: {height}</p>
      <p>The window's width is: {width}</p> 
    </div>
  )
}

export default DisplayWindowSite
