import { Catalog } from './components/Catalog'
import { Create } from './components/Create'
import { Details } from './components/Details'
import { Edit } from './components/Edit'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Routes, Route } from 'react-router'

function App() {

    return (
        <body>
        <Header />

        <main>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/catalog' element={<Catalog />}/>

                <Route path='/games'>
                    <Route path='add' element={<Create />} />
                </Route>

                <Route path='/users'>
                    <Route path='login' element={<Login />}/>
                    <Route path='register' element={<Register />}/>
                </Route>
            </Routes>
        </main>


        <Details />
        <Edit />
        <Footer />
        </body>
    )
}

export default App
