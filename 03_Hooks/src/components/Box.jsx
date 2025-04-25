import React from 'react'

const Box = ({ children, type= "info" }) => {
  let bgColor;
 
  switch (type) {
    case "success":
        bgColor = "lightgreen";
        break;
    case "error":
        bgColor = "salmon";
        break;
    // case "info":
    default:
        bgColor = "lightblue";
        
  }

  const styles = {
    height: "80px",
    padding: "20px",
    margin: "10px 0",
    borderRadius: "8px",
    backgroundColor: bgColor,
    color: "#333",
    fontWeight: "bold",
  }

    return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default Box
