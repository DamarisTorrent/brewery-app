import { createContext, useState } from "react";

const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {

  const [favorites, setFavorites] = useState([
    {
      // name: 'Some Brewery Name from context',
      // city: 'Charleston',
      // state: 'South Carolina'
    }
  ])

  return <FavoritesContext.Provider value={{
    favorites
  }}>
    {children}
  </FavoritesContext.Provider>
}
export default FavoritesContext
