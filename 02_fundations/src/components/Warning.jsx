import React from 'react'

const Warning = ({ warning }) => {

    if (!warning) {
        return null;
    }

  return (
    <div>
      AVISO!
    </div>
  )
}

export default Warning
