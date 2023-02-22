import { Routes, Route } from "react-router-dom";
import Home from './views/home/Home'
import { FavoritesProvider } from "./context/FavoritesContext";
import Favorites from "./views/favorites/Favorites";
import NotFound from './views/notfound/NotFound'


function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </div>
    </FavoritesProvider>
  );
}

export default App;
