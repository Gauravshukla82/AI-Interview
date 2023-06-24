import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import Chat from "../components/Chat"

const AllRoutes = () => {
    return (
        
            
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/sample' element={<sample />}/>
                <Route path='/chat' element={<Chat />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        
    )
}

export {AllRoutes}