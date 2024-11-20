import React from 'react'
import NavBar from "../Component/NavBar"

export const Layout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}
