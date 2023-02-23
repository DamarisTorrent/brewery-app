import { useContext } from 'react'
import FavoritesContext from '../../context/FavoritesContext'

function Favorites() {

  const {favoriteList} = useContext(FavoritesContext)
 console.log(favoriteList)
  return (
    <div>
      <h1> this is the favorites page</h1>
    </div> 

    
  )
}

export default Favorites

