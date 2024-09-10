import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import BorderLoading from "./components/border-loading/BorderLoading";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/border-loading" element={<BorderLoading/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
