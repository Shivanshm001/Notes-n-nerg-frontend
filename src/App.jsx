import React from "react";
import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Root from "./components/Pages/Home/Root";
import Upload from "./components/Pages/Upload/Upload";
import About from "./components/Pages/About/About";
import Footer from "./components/Footer";
function App(props) {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Root />}></Route>
                <Route path="/upload" element={<Upload />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App;