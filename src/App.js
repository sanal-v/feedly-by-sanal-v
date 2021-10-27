import './App.css';
import Dashboard from './Components/Landing/Dashboard';
import Navbar from './Components/Topbar';

function App() {
  return (
    <div >
      <Navbar />
      <Dashboard category="national" />
      <Dashboard category="world"/>
      <Dashboard category="business"/>
      <Dashboard category="sports"/>
    </div>
  );
}

export default App;
