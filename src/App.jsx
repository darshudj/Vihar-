
import Home from './components/home/home'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import About from './pages/about'
import Service from './pages/service'
import Bookmark from './pages/bookmark'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    <Route path='' element={<Home />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service />}/>
    <Route path='/places' element={<Bookmark/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App
