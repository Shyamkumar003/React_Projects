import React from 'react'

const User = ({user}) => {
    console.log(user)
  return (
    <div>
         <center>
        <p>{user.address.city}</p>
        </center>

    </div>
  )
}

export default User