import './App.css'
import { Catalog } from './components/Catalog'
import { Create } from './components/Create'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {

    return (
        <>
        <Header />
        <Catalog />

        <Create />
        <Footer />
        </>
    )
}

export default App
