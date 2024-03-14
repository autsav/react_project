import Home from "./components/Home";
import Profile from "./components/Profile"
import Movie from "./components/Movie"
import { BrowserRouter as Router, Routes, Route, Switch, Navigate } from 'react-router-dom'
import Contact from "./components/Contact";
import  ConditionalRendering  from './components/ConditionalRendering'

export default function App(){
  return(
    <Router>
          <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/contact' element={<Contact />} exact />
          <Route path='/movie' element={<Movie />} exact />
          <Route path='/profile' element={<Profile />} exact />
          <Route path='/conditionalRendering' element={<ConditionalRendering />}  />


      
          </Routes>        
    </Router>
  
  );
} 