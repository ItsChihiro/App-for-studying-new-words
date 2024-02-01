import cl from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Slider from '../Slider/Slider'
import TableWords from '../TableWords/TableWords'
import { words } from '../constants'

import { Error, Game } from '../../pages'

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
            <Route path='/' element={<TableWords words={words} />} />
            <Route path='/game' element={<Game words={words} />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

