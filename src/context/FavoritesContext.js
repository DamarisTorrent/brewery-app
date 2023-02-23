import { createContext, useState } from "react";

const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
  
  const [favoriteList, setFavoriteList] = useState([])
  
  const addFavorite = (newFavorite) =>{

    favoriteList.push(newFavorite)
    setFavoriteList(favoriteList)
      
  }

  return <FavoritesContext.Provider value={{

    favoriteList,
    addFavorite,
  }}>
    {children}
  </FavoritesContext.Provider>
}
export default FavoritesContext
