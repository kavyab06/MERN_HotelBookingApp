import { faBed, faCamera, faCar, faPlane, faTaxi, faCalendar, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './header.css'

export const Header = ({type}) => {

    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return{
                ...prev,
                [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

  return (
    <div className='h-container'>
        <div className="h-row">
            <div className="h-col">
                <Link to="/">XYZ</Link>
            </div>
            <div className="h-col">
                <button>Register</button>
                <button>Sign In</button>
            </div>
        </div>
        <div className="h-row">
            <div className={type === "smallHeader" ? "h-col smallHeader" : "h-col"}>
                <div className="icons">
                    <div className="icon">
                        <FontAwesomeIcon icon = {faBed} />
                        <Link to = '/'>Stays</Link>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon = {faPlane} />
                        <Link to = '/'>Flights</Link>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon = {faCar} />
                        <Link to = '/'>Car Rentals</Link>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon = {faCamera} />
                        <Link to = '/'>Attractions</Link>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon = {faTaxi} />
                        <Link to = '/'>Airport Taxis</Link>
                    </div>
                </div>
            </div>
            {
                type !=="smallHeader" &&
                <>
                    <div className="h-col">
                        <h2>Make your Reservation</h2>
                    </div>
                    <div className="h-col">
                        <div className="search">
                            <div className="search-item">
                                <FontAwesomeIcon icon = {faTaxi} />
                                <input type="text" placeholder='Where you are going?' />
                            </div>
                            <div className="search-item">
                                <FontAwesomeIcon icon = {faCalendar} />
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                                {openDate && (<DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date} className="date"
                                />)
                                }
                            </div>
                            <div className="search-item">
                                <FontAwesomeIcon icon = {faPerson} />
                                <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                                {
                                    openOptions && (
                                        <div className="options">
                                            <div className="optionsItem">
                                                <span>Adult</span>
                                                <div className="optionsButton">
                                                    <button onClick={() => handleOption("adult", "decrement")} className='optionsBtn' disabled={options.adult<=1}>-</button>
                                                    <span>{options.adult}</span>
                                                    <button onClick={() => handleOption("adult", "increment")} className='optionsBtn'>+</button>
                                                </div>
                                            </div>
                                            <div className="optionsItem">
                                                <span>Children</span>
                                                <div className="optionsButton">
                                                    <button onClick={() => handleOption("children", "decrement")} className='optionsBtn' disabled={options.children<=0}>-</button>
                                                    <span>{options.children}</span>
                                                    <button onClick={() => handleOption("children", "increment")} className='optionsBtn'>+</button>
                                                </div>
                                            </div>
                                            <div className="optionsItem">
                                                <span>Room</span>
                                                <div className="optionsButton">
                                                    <button onClick={() => handleOption("room", "decrement")} className='optionsBtn' disabled={options.room<=1}>-</button>
                                                    <span>{options.room}</span>
                                                    <button onClick={() => handleOption("room", "increment")} className='optionsBtn'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="search-item">
                                <FontAwesomeIcon icon = {faSearch} />
                                <button className='btnSearch'>Search</button>
                            </div>
                        </div>
                    </div>
                </>
            }
            
        </div>
    </div>
  )
}
