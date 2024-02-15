import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import Community from "./pages/Community";
import Browse from "./pages/Browse";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/mybooks' element={<MyBooks/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/browse' element={<Browse/>}/>

            </Routes>
            

        </div>
        
    )
}

export default App;