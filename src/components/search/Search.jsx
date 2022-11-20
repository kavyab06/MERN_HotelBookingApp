import { faBed, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useLocation } from 'react-router-dom'
import './search.css'

const Search = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div className='searchHotels'>
            <div className="search">
                <div className="searchItem">
                    <label>Destination</label>
                    <input placeholder={destination} type="text" />
                </div>

                <div className="searchItem">
                    <label>Check-in Date</label>
                    <label onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</label>
                    {openDate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>)}
                </div>

                <div className="searchItem">
                        <div className="searchOptions">
                            <div className="searchOptionsItem">
                                <label className="searchOptionsText">Min Price <sub>per night</sub></label>
                                <input type="number" className="searchOptionsInput" />    
                            </div>
                            <div className="searchOptionsItem">
                                <label className="searchOptionsText">Max Price <sub>per night</sub></label>
                                <input type="number" className="searchOptionsInput" />    
                            </div>
                            <div className="searchOptionsItem">
                                <label className="searchOptionsText">Adult</label>
                                <input type="number" min={1} className="searchOptionsInput" placeholder={options.adult}/>    
                            </div>
                            <div className="searchOptionsItem">
                                <label className="searchOptionsText">Children</label>
                                <input type="number" min={0} className="searchOptionsInput" placeholder={options.children}/>    
                            </div>
                            <div className="searchOptionsItem">
                                <label className="searchOptionsText">Room</label>
                                <input type="number" min={1} className="searchOptionsInput" placeholder={options.room}/>    
                            </div>
                        </div>
                </div>
                <div className="searchItem">
                    <button className='btnSearch' onClick={useNavigate}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search
