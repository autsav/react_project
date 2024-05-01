import Home from "./components/Home";
import Profile from "./components/Profile"
import Movie from "./components/Movie"
import { BrowserRouter as Router, Routes, Route, Switch, Navigate } from 'react-router-dom'
import Contact from "./components/Contact";
import  ConditionalRendering  from './components/ConditionalRendering'
import PackingList from "./components/PackingList";
import DrinkList from "./components/DrinkList";
import RenderingList from "./components/RenderingList";
import KeepingComponentPure from "./components/KeepingComponentPure";
import AddingInteractivity from "./components/AddingInteractivity";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import UpdatingObjectInState from "./components/UpdatingObjectInState";
import UpdatingArrayInState from "./components/UpdatingArrayInState";
import Calculator from "./components/Calculator";
import QuoteGenerator from "./components/QuoteGenerator";
import WhetherApp from "./components/whetherApp/WhetherApp";
import NoteApp from "./components/Notes/NoteApp"
import ExpenseTrackerApp from "./components/ExpenseTrackerApp";
import TimeTracker from "./components/Timetracker";
export default function App(){
  return(
    <Router>
          <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/contact' element={<Contact />} exact />
          <Route path='/movie' element={<Movie />} exact />
          <Route path='/profile' element={<Profile />} exact />
          <Route path='/conditionalRendering' element={<ConditionalRendering />}  />
          <Route path='/packingList' element={<PackingList />}  />
          <Route path='/drinkList' element={<DrinkList />}  />
          <Route path='/renderingList' element={<RenderingList />}  />
          <Route path='/keepingComponentPure' element={<KeepingComponentPure />}  />
          <Route path='/addingInteractivity' element={<AddingInteractivity />}  />
          <Route path='/gallery' element={<Gallery />}  />
          <Route path='/form' element={<Form />}  />
          <Route path='/updateObjectInState' element={<UpdatingObjectInState />}  />
          <Route path='/updateArrayInState' element={<UpdatingArrayInState />}  />
          <Route path='/calculator' element={<Calculator />}  />
          <Route path='/quoteGenerator' element={<QuoteGenerator />}  />
          <Route path='/Whether' element={<WhetherApp />}  />
          <Route path='/note' element={<NoteApp />}  />
          <Route path='/expensetracker' element={<ExpenseTrackerApp />}  />
          <Route path='/timetracker' element={<TimeTracker />}  />







          


          </Routes>        
    </Router>
  
  );
} 
