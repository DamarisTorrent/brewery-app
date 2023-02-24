import { Map, Marker, ZoomControl } from "pigeon-maps"
import { useState, useEffect} from 'react'
import CardContainer from "../../components/CardContainer"
import  AppBar  from '../../components/AppBar'


function Home() {
  
  const [anchor, setAnchor] = useState()
  const [latLng, setLatLng] = useState()
  const [fetchString, setFetchString] = useState()
  const location = []

  function handleClick(latLng) {

    if (typeof latLng == 'undefined'){
      latLng = [32.7765, -79.9311]
    }
    console.log(latLng)
    setLatLng(latLng)
    setAnchor(latLng)
    setFetchString(`https://api.openbrewerydb.org/breweries?by_dist=${latLng}&per_page=15`)
  }

  useEffect(() => {
    
      navigator.geolocation.getCurrentPosition(getPosition);
    
    function getPosition(position) {
      
      location[0] = position.coords.latitude
      location[1] = position.coords.longitude
    }
    console.log(location)
    setLatLng(location)
  }, [])

  useEffect(() => {
    handleClick();
  }, [])

  return (
    <div>
      <AppBar></AppBar>
      <br></br>
      <Map 
        height={350} 
        defaultWidth={1200}
        defaultCenter={[39.8283, -98.5795]} 
        defaultZoom={4}
        
        onClick={(e) => handleClick(e.latLng)}
        // onClick={({latLng}) => {
        //   setLatLng(latLng)
        //   setAnchor(latLng)
        //   setFetchString(`https://api.openbrewerydb.org/breweries?by_dist=${latLng}&per_page=10`)
        // }}
        >

        <ZoomControl/>

        <Marker 
          width={25} 
          anchor={latLng}>
        </Marker>

      </Map>

     <CardContainer fetchString={fetchString}/>
    
    </div>
  )
}

export default Home