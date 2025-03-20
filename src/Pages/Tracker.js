import AirSummary from './TrackerComponent/Airsummary'
import '../App.css';
import { useEffect, useState } from 'react';
import { NativeSelect, FormControl, Container, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import sky1 from '../images/pic1.jpg'
import LineGraph from './TrackerComponent/Graph';
import { Link } from 'react-router-dom';


const Tracker = () => {
  const [temprature, setTemprature] = useState()
  const [humidity, setHumidity] = useState()
  const [windSpeed, setWind] = useState()
  const [airQuality, setAirQuality] = useState()
  const [country_, setCountry] = useState()
  const [state_, setState] = useState()
  const [city_, setCity] = useState()
  const [image, setImage] = useState('01d')
  const [countryFind, setCountryFind] = useState([])
  const [stateFind, setStateFind] = useState([])
  const [cityFind, setCityFind] = useState([])
  const [day, setDay] = useState([])
  const [airPollution, setAirPollution] = useState([])
  const [key, setKey] = useState('4e842aff-9ecb-465f-8e78-01712b4e4eb7')
  const [keyFlex, setKeyFlex] = useState('8499022c-9857-4f20-aae6-6d66342554ad')
  const [graphError, setGraphError] = useState(false)
  const [flag, setFlag] = useState(false)
  const [graph, setGraph] = useState(false)


  const token = '081f767a7eb83c5dc06d9c54004095e6e206c257'
  const imageLink = `http://openweathermap.org/img/wn/${image}@2x.png`

  useEffect(() => {
    axios.get(`http://api.airvisual.com/v2/countries?key=${key}`)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          setCountryFind(res.data.data)
        }
      }).catch(error => {
        console.log(error)
        setKey(keyFlex)
        setKeyFlex(key)
      })
  }, [])

  const countryHandler = (e) => {
    setCountry(e.target.value)
    axios.get(`http://api.airvisual.com/v2/states?country=${e.target.value}&key=${key}`)
      .then(res => {
        console.log(res)
        setStateFind(res.data.data)
      }).catch(error => {
        console.log(error)
        setKey(keyFlex)
        setKeyFlex(key)
      })
  }

  const stateHandler = (e) => {
    setState(e.target.value)
    axios.get(`http://api.airvisual.com/v2/cities?state=${e.target.value}&country=${country_}&key=${key}`)
      .then(res => {
        console.log(res)
        setCityFind(res.data.data)
      }).catch(error => {
        console.log(error)
        setKey(keyFlex)
        setKeyFlex(key)
      })
  }

  const cityHandler = (e) => {
    setCity(e.target.value)
    axios.get(`http://api.airvisual.com/v2/city?city=${e.target.value}&state=${state_}&country=${country_}&key=${key}`)
      .then(res => {
        console.log(res)
        setTemprature(res.data.data.current.weather.tp)
        setHumidity(res.data.data.current.weather.hu)
        setWind(res.data.data.current.weather.ws)
        setAirQuality(res.data.data.current.pollution.aqius)
        setImage(res.data.data.current.weather.ic)
        setFlag(true)
      }).catch(error => {
        console.log(error)
        setKey(keyFlex)
        setKeyFlex(key)
      })
    setGraphError(false)
    setGraph(true)
    axios.get(`https://api.waqi.info/feed/${e.target.value}/?token=${token}`)
      .then(res => {
        console.log(res)

        setDay(res.data.data.forecast.daily.pm25.map((d) => d.day))
        setAirPollution(res.data.data.forecast.daily.pm25.map((d) => d.avg))
      }).catch((error) => {
        console.log(error)
        setGraphError(true)
      })
  }



  return (<div className='App'>
    <AirSummary temprature={temprature}
      humidity={humidity}
      windSpeed={windSpeed}
      airQuality={airQuality} />

    <div>
      <br /><br />

      <FormControl>
        <NativeSelect value={country_} onChange={countryHandler}>

          <option>Select a Country</option>
          {countryFind && countryFind.map(e => <option key={e.country} value={e.country}>{e.country}</option>)}
        </NativeSelect>
        <NativeSelect value={state_} onChange={stateHandler}>
          <option>Select a State</option>
          {stateFind && stateFind.map(e => <option key={e.state} value={e.state}>{e.state}</option>)}
        </NativeSelect>
        <NativeSelect value={city_} onChange={cityHandler}>
          <option>Select a City</option>
          {cityFind && cityFind.map(e => <option key={e.city} value={e.city}>{e.city}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
    <div>
      {flag && <div><img alt={'weather'} src={imageLink} /></div>} </div>
    <br></br>

    <div>{graphError && <div><h1>The city does not exist in the Particulate Matter data</h1></div>}
      {!graphError === true && graph === true ? (<div><LineGraph airPollution={airPollution} day={day} /></div>) : (<div><br></br><img src={sky1} style={{ width: '100%' }} /></div>)}
    </div>
    <div className='lewlew2'>
      <h2 className="CuaConCho">How much do you know about the Air?</h2>
      <h2 style={{ lineHeight: '0', color: 'black' }} >
        <Link to={'/QuizPage'} className='link2'>Take the Quiz!!!</Link>
      </h2>
    </div>
  </div>
  )
}

export default Tracker;
