import { createContext, useState } from "react";

const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
  
  const [favoriteList, setFavoriteList] = useState([])
  
  console.log('list', favoriteList)
  const addFavorite = (newFavorite) =>{

    console.log('new favorite is', newFavorite)
    // if (favoriteList.length = 0) 
    //   {let list = [newFavorite]
    //   setFavoriteList(list)
    //   console.log('list after first favorite added', )}
    // else {
      console.log('This is the existing favorite list', favoriteList)
      favoriteList.push(newFavorite)
      setFavoriteList(favoriteList)
      console.log('This is the final list', favoriteList)
  
    console.log('list after addfavorite', favoriteList)
  }

  return <FavoritesContext.Provider value={{

    favoriteList,
    addFavorite,
  }}>
    {children}
  </FavoritesContext.Provider>
}
export default FavoritesContext
