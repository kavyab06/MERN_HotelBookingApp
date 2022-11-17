import React from 'react'
import City from '../../components/city/City'
// import Header from '../../components/header/Header'
import { Header } from '../../components/header/Header'
import PropertyType from '../../components/propertyType/PropertyType'
import './home.css'
const home = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <City />
        <PropertyType />
      </div>
    </div>
  )
}

export default home