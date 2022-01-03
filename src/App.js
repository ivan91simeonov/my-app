import Navigation from "./component/Navigation"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
    return (
        <Router>
        <div className="container">
           <Navigation />
            
           <main>
               Component
           </main>
        </div>
        </Router>
    )
}

export default App
