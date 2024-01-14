import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import cl from './App.module.css'
import ListOfWords from '../TableWords/TableWords'
import { words } from '../constants'
import Slider from '../Slider/Slider'

export default function App() {
  return (
    <div className={cl.App}>
      <Header />
      <ListOfWords words={words} />
      <Slider />
      <Footer />
    </div>
  )
}

