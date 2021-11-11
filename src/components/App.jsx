import React, {useState, useEffect} from "react";
import Header from './Header';
import Joke from './Joke'
import Home from './Home'
import JokeForm from'./JokeForm'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
function App() {
  const [nsfw, setnsfw] = useState(false);
  function updateflag(b){
    setnsfw(b);
    console.log(nsfw);
  };
  return  <BrowserRouter>
  <div>
    <Header />
    <Routes>
    <Route path='/' element={<Home updateflag={updateflag}/>} />
    <Route path='/joke' element={<Joke nsfwflag={nsfw}/>} />
    <Route path='/tellAjoke' element={<JokeForm />} />
    </Routes>
  </div>
  </BrowserRouter>
}

export default App;
