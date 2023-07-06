import React, { useContext,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"
import { LoginContext } from './ContextProvider/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom"
// import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Header = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutuser = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 201) {
            console.log("use logout");
            localStorage.removeItem("usersdatatoken");
            setLoginData(false)
            history("/");
        } else {
            console.log("error");
        }
    }

    const goDash = () => {
        history("/dash")
    }

    const goError = () => {
        history("*")
    }
    
      const [city, setCity] = useState('');
      const [weatherData, setWeatherData] = useState(null);
      const [error, setError] = useState(null);
    
      const handleSearch = () => {
        if (city.trim() === '') {
          setError('Please enter a city name');
          setWeatherData(null);
          return;
        }
    
        axios.get(`/api/weather?city=${city}`)
          .then((response) => {
            setWeatherData(response.data);
            setError(null);
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
            setError('Error fetching weather data');
            setWeatherData(null);
          });
      };
    
      return (
        <header>
           
            < nav class="navbar">
            <div className="avtar">
                {  logindata.ValidUserOne ? <Avatar style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }} 
                    onClick={handleClick}>{logindata.ValidUserOne.fname[0].toUpperCase()}</Avatar> :
                    <Avatar style={{ background: "blue" }} onClick={handleClick} />
                }               
            </div>
            <tr class="navbar-brand" >
                    <td class="nav-item"><Link to="./" class="nav-link">Weather App</Link></td>
                    <td class="nav-item"><Link to="./About" class="nav-link">About Us</Link></td>
                    <td class="nav-item"><Link to="./Contact" class="nav-link">Contact Us</Link></td>
                    <td class="nav-item"><Link to="./Hourly" class="nav-link">Hourly Weather</Link></td>
                
                <td className="search-bar">
                    <input
                    type="text"
                    placeholder="Search..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="button" onClick={handleSearch}>Search</button>
                </td>
                </tr>
                {error && <p>{error}</p>}
                {weatherData && (
                    <div>
                    <h3>Current Weather in {weatherData.name}</h3>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    </div>
                
                )}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    logindata.ValidUserOne ? (
                        <>
                            <MenuItem onClick={() => {
                                goDash()
                                handleClose()
                            }}>Profile</MenuItem>
                            <MenuItem onClick={() => {
                                logoutuser()
                                handleClose()
                            }}>Logout</MenuItem>
                        </>
                    ) : (
                        <>
                            <MenuItem onClick={() => {
                                goError()
                                handleClose()
                            }}>Profile</MenuItem>
                        </>
                    )
                }
            </Menu>
        </nav>
        </header>
      );
    };
export default Header