import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './component/Footer.jsx'
import Navbar from './component/Navbar.jsx'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <div>
  <BrowserRouter>
  <Navbar/>
  <div style={{margin:"100px"}} className='container'>
    <App />
    </div>
   <Footer/>
   </BrowserRouter>
 </div>
 </Provider>
)
