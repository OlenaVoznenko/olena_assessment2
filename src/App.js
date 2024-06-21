import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import WandererC from "./components/WandererC";
import TourenC from "./components/TourenC";
import Home from "./components/Home";
import TourC from "./components/TourC";
import GroupenC from "./components/GroupenC";
import WanderC from "./components/WanderC";

function App() {
  return (
    <Router>

        <nav>
            <ul>
                <li><Link to="/">SrartSeite</Link></li>
                <li><Link to="/touren">Touren</Link></li>
                <li><Link to="/wanderer">Wanderer</Link></li>
            </ul>
        </nav>

        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/touren" element={<TourenC/>}/>
                <Route path="/wanderer" element={<WandererC/>}/>

                <Route path="/touren/:id" element={<TourC/>}/>
                <Route path="/wanderer/:id" element={<WanderC/>}/>

                <Route path="/touren/:id/groupen" element={<GroupenC/>}/>
                <Route path="/wanderer/:id/touren" element={<WanderC/>}/>

            </Routes>
        </div>
    </Router>
)
    ;
}

export default App;

