import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children, style }) => {
  return (
    <Alert
      style={{
        ...style,
        marginTop: '2vh',
        borderRadius: '2.5vh',
        minHeight: '6.5vh',
        width: '95%',
        marginLeft: '2.5%',
        fontFamily: 'Montserrat',
      }}
      variant={variant}
    >
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
