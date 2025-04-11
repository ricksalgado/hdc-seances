import React from 'react'

const Container = ({children}) => {
  return (
    <div classeName="container">
        <h2>Inicio</h2>
        <div>{children}</div>
        <h3>Terminou</h3>
      
    </div>
  )
}

export default Container
