import { useState, useEffect } from 'react'
import BrewCard from './BrewCard'

function CardContainer( props ) {
  
  const [breweryData, setBreweryData] = useState([])
  const {fetchString} = props
 
  useEffect(() => {
    
    fetch(fetchString)
    
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setBreweryData(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [fetchString])// dependencies array is empty so the fetch request is only run once

   
  return (
    
    <div className='cardContainer'>

      {breweryData.map((element) => {
        return (
          <div >
            <BrewCard
              name={element.name}
              brewery_type={element.brewery_type}
              street={element.street}
              city={element.city}
              state={element.state}
              postal_code={element.postal_code}
              country={element.country}
              phone={element.phone}
              website_url={element.website_url}
            />
          </div>
          )
          })}
    </div>
    
  )
      
}

export default CardContainer