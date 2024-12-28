
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin }  from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './components/Publish'



function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Signup></Signup>}/>
  <Route path='/signup' element={<Signup></Signup>}/>
  <Route path='/signin' element={<Signin></Signin>}/>
  <Route path='/blog/:id' element={<Blog></Blog>}/>
  <Route path='/blogs' element={<Blogs/>}/>
  <Route path='/publish' element={<Publish/>}/>

  </Routes>
  </BrowserRouter>

     </>
  )
}

export default App
