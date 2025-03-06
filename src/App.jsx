import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import OurOffers from './pages/OurOffers'
import PersonalTraining from './pages/PersonalTraining'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/OurOffers' element={<OurOffers/>}/>
        <Route path = '/PersonalTraining' element={<PersonalTraining/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
