import './styling/App.css';

import Main from "./components/Main"
import Navbar from './components/Navbar'
import Chat from './components/Chat';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Chat/>
    </div>
  );
}

export default App;
