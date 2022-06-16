import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Feed />} />

          {/* <Widgets /> */}
        </Routes>

      </div>
    </Router>

  );
}

export default App;
