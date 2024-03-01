import cl from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TableWords from '../TableWords/TableWords'
import { Error, Game, Home } from '../../pages'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div className={cl.App}>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<Game />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

