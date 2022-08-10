import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../pages/main/header/Header'

const MainLayout = () => {
  return (
    <>
      <Header/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default MainLayout