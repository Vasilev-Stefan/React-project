import './App.css'
import { Catalog } from './components/Catalog'
import { Create } from './components/Create'
import { Details } from './components/Details'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {

    return (
        <>
        <Header />
        <Catalog />

        <Create />
        <Details />
        <Edit />
        <Footer />
        </>
    )
}

export default App
