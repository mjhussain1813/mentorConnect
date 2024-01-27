import React from 'react'
import { useParams } from 'react-router-dom'

const VerifyUser = () => {
    const {verificationToken} = useParams();
  return (
    <div>VerifyUser : {verificationToken}</div>
  )
}

export default VerifyUser