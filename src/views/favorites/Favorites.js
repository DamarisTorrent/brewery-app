import { useContext } from 'react'
import FavoritesContext from '../../context/FavoritesContext'
import BrewCard from '../../components/BrewCard'
import { AppBar } from '../../components/AppBar'

function Favorites() {

  const {favoriteList} = useContext(FavoritesContext)
  console.log(favoriteList)
  
  return (
    
      
      <div>
       

      {favoriteList.map((element) => {
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

export default Favorites

