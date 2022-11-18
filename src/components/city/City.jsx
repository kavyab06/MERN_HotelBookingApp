import React from 'react'
import './city.css'
const City = () => {
  return (
    <div className='cities'>
        <h2 className='cityTitle'>Explore Serbia</h2>
        <p className='cityDesc'>These popular destinations have a lot to offer</p>
        <div className="cityImages">
            <div className="cityImage">
                <div className="cityImg">
                    <img src="./assets/images/kg.jpg" alt="Kragujevac" />
                </div>
                <h4 className='cityImgTitle'>Kragujevac</h4>
                <span className='cityImgProperties'>320 properties</span>
            </div>
            <div className="cityImage">
                <div className="cityImg">
                    <img src="./assets/images/bg.jpg" alt="Belgrade" />
                </div>
                <h4 className='cityImgTitle'>Belgrade</h4>
                <span className='cityImgProperties'>2120 properties</span>
            </div>
            <div className="cityImage">
                <div className="cityImg">
                    <img src="./assets/images/ac.jpg" alt="Aleksandrovac Zupa" />
                </div>
                <h4 className='cityImgTitle'>Aleksandrovac Zupa</h4>
                <span className='cityImgProperties'>4 properties</span>
            </div>
            <div className="cityImage">
                <div className="cityImg">
                    <img src="./assets/images/le.jpg" alt="Leskovac" />
                </div>
                <h4 className='cityImgTitle'>Leskovac</h4>
                <span className='cityImgProperties'>62 properties</span>
            </div>
            <div className="cityImage">
                <div className="cityImg">
                    <img src="./assets/images/ns.jpeg" alt="Novi Sad" />
                </div>
                <h4 className='cityImgTitle'>Novi Sad</h4>
                <span className='cityImgProperties'>1340 properties</span>
            </div>
        </div>
    </div>
  )
}

export default City
