import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import cl from './App.module.css'
import ListOfWords from '../ListOfWords/ListOfWords'
import { words } from '../constants'
import Cards from '../Cards/Cards'

export default function App() {
  return (
    <div className={cl.App}>
      <Header />
      <ListOfWords words={words} />
      <Cards words={words}></Cards>
      <Footer />
    </div>
  )
}

