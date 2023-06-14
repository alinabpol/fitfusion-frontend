import './styling/App.css';

import Main from "./components/Main"
import Navbar from './components/Navbar'
import Chat from './components/Chat';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Chat/>
      <Footer/>
    </div>
  );
}

export default App;
