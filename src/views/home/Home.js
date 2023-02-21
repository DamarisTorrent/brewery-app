import { Map, Marker } from "pigeon-maps"
import { useState, useEffect } from 'react'

function Home() {
  
  const [anchor, setAnchor] = useState([])
  const [latLng, setLatLng] = useState()
  const [name, setName] = useState()

  console.log(name)
  console.log(latLng)
  return (
    <div>

<Map 
      height={300} 
      defaultCenter={[39.8283, -98.5795]} 
      defaultZoom={4}
      onClick={({latLng}) => {
        setLatLng(latLng)
        setAnchor(latLng)
        setName('Test name onclick')
      }}>

      <Marker 
        width={25} 
        anchor={latLng}>
      </Marker>

      {/* <Card>
        name = {name}
      </Card> */}
      
    </Map>

    </div>
  )
}

export default Home