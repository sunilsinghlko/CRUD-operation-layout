import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Menu from './element/Menu'
import Footer from './element/Footer'
import Header from './element/Header'
import Create from './component/Create'
import Read from './component/Read'
import Search from './component/Search'
import Update from './component/Update'
import Headroom from 'react-headroom'


function App() {
 
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Headroom>
      <Menu/>
      </Headroom>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/read' element={<Read/>} />
            <Route path='/search' element={<Search/>}/>
            <Route path='/update' element={<Update/>}/>
            <Route path='/update/:id' element={<Update/>} />
            <Route path='/create' element={<Create/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
