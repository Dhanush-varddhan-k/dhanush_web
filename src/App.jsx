import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/contact/Contact'
import Home from './pages/home/home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route index element ={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>


     </Routes>
   
   </BrowserRouter>
  );
}

export default App
