import Navigation from "./component/Navigation"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./component/Login";



function App() {
    return (
        <Router>
        <div className="container">
            <Routes>
                <Route exact path="/" element={
                    <Navigation />
                } >
            <Route path="/login" element={<Login />} />

            </Route>
            </Routes>
        </div>
        </Router>
    )
}

export default App
