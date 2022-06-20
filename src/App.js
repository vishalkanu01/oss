import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';




function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />

        </Routes>

      </div>
    </Router>

  );
}

export default App;
