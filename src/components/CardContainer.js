import { useState, useEffect } from 'react'
import card from './Card'

function CardContainer( props ) {
  
  const [breweryData, setBreweryData] = useState([])
  const {fetchString} = props


 

  useEffect(() => {
    console.log('in the useeffect')
    fetch(fetchString)
    
      .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch")
        }
        return response.json() // parse the response data
      })
      .then(result => setBreweryData(result)) // set state when the data received
      .catch(err => err) // return the error
    }, [])// dependencies array is empty so the fetch request is only run once

  
  return (
    
    <div>
        
        <h5>{fetchString}</h5>
       {breweryData.map((element) => {
          return (
            <h4>{element.name}</h4>
          )
        })}
    </div>
    
  )
      
}

export default CardContainer