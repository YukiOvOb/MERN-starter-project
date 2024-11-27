import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRouote from './components/PrivateRouote';

export default function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>  
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/about' element={<About />}/>
      <Route element={<PrivateRouote />}>
        <Route path='/profile' element={<Profile />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
