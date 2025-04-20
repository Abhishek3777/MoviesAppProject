
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { Routes, Route } from "react-router-dom"
import './components/css/App.css'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'

function App() {


  return (
    <MovieProvider>
      <div>
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favourites' element={<Favourites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  )
}

export default App
