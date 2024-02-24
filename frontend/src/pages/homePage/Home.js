import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const Home = () => {
  const {user,logoutUser}=useContext(AuthContext)
  return (
    <div>
      <p>{user?.username}</p>
      <button onClick={logoutUser}>Logout</button>
      
    </div>
  )
}

export default Home