import './App.css';
import Navbar from './components/Navbarcomponent';
import Home from './components/Home';
import About from './components/About';
import Iconbar from './components/Iconbar';
import Resume from './components/Resume';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <Iconbar/>
            <Resume/>
        </div>
    );
}

export default App;
