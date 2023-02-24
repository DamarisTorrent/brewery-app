import { useContext} from 'react'
import FavoritesContext from '../../context/FavoritesContext'
import BrewCard from '../../components/BrewCard'
import Typography from '@mui/material/Typography';
import AppBar from '../../components/AppBar'
import { Link } from 'react-router-dom';

function Favorites() {

  const {favoriteList} = useContext(FavoritesContext)
  
  let noFavorites = false

  if (favoriteList.length === 0) {
    noFavorites = true
  }
  return (
    
    <div>
       
      <AppBar></AppBar>
      <div>
      {noFavorites ? <Link to="/"><Typography variant="h3" data-testid='nofaves'>No favorites yet, go home and get busy drinking!</Typography></Link>: ''}
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

