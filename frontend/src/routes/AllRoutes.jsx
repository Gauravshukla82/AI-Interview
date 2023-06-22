import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"

const AllRoutes = () => {
    return (
        
            
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        
    )
}

export {AllRoutes}