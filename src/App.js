import './App.css';
import Navbar from './components/Navbarcomponent';
import Home from './components/Home';
import About from './components/About';
import Iconbar from './components/Iconbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <Iconbar/>
            <Resume/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
