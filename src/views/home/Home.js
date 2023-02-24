import { Map, Marker, ZoomControl } from "pigeon-maps"
import { useState} from 'react'
import CardContainer from "../../components/CardContainer"
import  AppBar  from '../../components/AppBar'

function Home() {
  
  const [anchor, setAnchor] = useState()
  const [latLng, setLatLng] = useState()
  const [fetchString, setFetchString] = useState()
  
  return (
    <div>
      <AppBar></AppBar>
      <br></br>
      <Map 
        height={350} 
        defaultWidth={1200}
        defaultCenter={[39.8283, -98.5795]} 
        defaultZoom={4}
        onClick={({latLng}) => {
          setLatLng(latLng)
          setAnchor(latLng)
          setFetchString(`https://api.openbrewerydb.org/breweries?by_dist=${latLng}&per_page=10`)
        }}>

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