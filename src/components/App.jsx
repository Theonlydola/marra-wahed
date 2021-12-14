import React, {useState} from "react";
import Header from './Header';
import Joke from './Joke'
import Home from './Home'
import About from "./About";
import JokeForm from './JokeForm'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import AdminPanel from "./AdminPanel";
import LoginPage from "./LoginPage";
function App() {
  const [nsfw, setnsfw] = useState(false);
  const [auth, setauth] = useState(false);
  function updateflag(b){
    setnsfw(b);
    console.log(nsfw);
  };

  function login(a){
    setauth(a);
  };

  return  <BrowserRouter>
  <div>
    <Header />
    <Routes>
    <Route path='/' element={<Home updateflag={updateflag}/>} />
    <Route path='/joke' element={<Joke nsfwflag={nsfw}/>} />
    <Route path='/tellAjoke' element={<JokeForm />} />
    <Route path='/About' element={<About />} />
    <Route path='/admin' element = {auth? <AdminPanel /> : <LoginPage login={login} /> } />
    </Routes>
  </div>
  </BrowserRouter>
}

export default App;
