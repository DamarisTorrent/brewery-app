import { useContext} from 'react'
import FavoritesContext from '../../context/FavoritesContext'
import BrewCard from '../../components/BrewCard'
import Typography from '@mui/material/Typography';
import AppBar from '../../components/AppBar'


function Favorites() {

  //Get the favorite list from context
  const {favoriteList} = useContext(FavoritesContext)
  
  let noFavorites = false

  //If favorite list is empty set a noFavorites boolean to display empty message
  if (favoriteList.length === 0) {
    noFavorites = true
  }
  return (
    
    <div>
       
      <AppBar></AppBar>
      <div>
      {noFavorites ? <Typography variant="h3" data-testid='nofaves'>No favorites yet, go home and get busy drinking!</Typography>: ''}
      </div>
      <br></br>

      {favoriteList.map((element) => {
        return (
          <div className='cardContainer'>
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

