import React from 'react'
import City from '../../components/city/City'
// import Header from '../../components/header/Header'
import { Header } from '../../components/header/Header'
import PropertyType from '../../components/propertyType/PropertyType'
import Tops from '../../components/Tops/Tops'
import './home.css'

const home = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <City />
        <PropertyType />
        <Tops />
      </div>
    </div>
  )
}

export default home
