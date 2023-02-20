import { Routes, Route } from "react-router-dom";
import Home from './views/home/Home'
import About from './views/about/About'
import NotFound from './views/notfound/NotFound'
import Layout from './layout/Layout'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
