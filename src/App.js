import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";



function App() {
  return (
    <div className="app">
      <Sidebar />
      < Feed />
      <Widgets />
    </div>
  );
}

export default App;
