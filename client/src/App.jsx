import { Catalog } from './components/Catalog'
import { Create } from './components/Create'
import { Details } from './components/Details'
import { Edit } from './components/Edit'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'

function App() {

    return (
        <>
        <Header />
        <Home />
        <Catalog />

        <Login />
        <Register />

        <Create />
        <Details />
        <Edit />
        <Footer />
        </>
    )
}

export default App
