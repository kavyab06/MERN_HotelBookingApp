import React from 'react'
import './propertytype.css'
import { Link } from 'react-router-dom'

const PropertyType = () => {
   
  return (
    <div className='ptypeContainer'>
        <h2 className='ptypeTitle'>Browse by Property Type</h2>
        <div className="cityImages">
            <div className="cityImage">
                <Link to="/">
                    <div className="cityImg">
                        <img src="./assets/images/ho.jpg" alt="Hotels" />
                    </div>
                    <h4 className='cityImgTitle'>Hotels</h4>
                    <span className='cityImgProperties'>250014 properties</span>
                </Link>
            </div>
            <div className="cityImage">
                <Link to="/">
                    <div className="cityImg">
                        <img src="./assets/images/ap.jpg" alt="Appartments" />
                    </div>
                    <h4 className='cityImgTitle'>Appartments</h4>
                    <span className='cityImgProperties'>120142 properties</span>
                </Link>
            </div>
            <div className="cityImage">
                <Link to="/">
                    <div className="cityImg">
                        <img src="./assets/images/re.jpg" alt="Resorts" />
                    </div>
                    <h4 className='cityImgTitle'>Resorts</h4>
                    <span className='cityImgProperties'>85410 properties</span>
                </Link>
            </div>
            <div className="cityImage">
                <Link to="/">
                    <div className="cityImg">
                        <img src="./assets/images/vi.jpg" alt="Villas" />
                    </div>
                    <h4 className='cityImgTitle'>Villas</h4>
                    <span className='cityImgProperties'>24120 properties</span>
                </Link>   
            </div>
            <div className="cityImage">
                <Link>
                    <div className="cityImg">
                        <img src="./assets/images/ca.jpg" alt="Cabins" />
                    </div>
                    <h4 className='cityImgTitle'>Cabins</h4>
                    <span className='cityImgProperties'>54140 properties</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PropertyType
