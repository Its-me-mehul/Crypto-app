import React from "react";
import Exchange from "./Exchange";
import Home from "./Home";
import Coins from "./Coins";
import Header from "./Header";
import CoinInfo from "./CoinInfo";
import Videos from "./videos/Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

const App = () => {

    return(
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exchange" element={<Exchange />} />
                    <Route path="/coins" element={<Coins />} />
                    <Route path="/coin/:id" element={<CoinInfo />} />
                    <Route path="/videos" element={<Videos />}/>
                </Routes>
                <Footer />
            </Router>
    )
}

export default App;