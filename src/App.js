import './reset.css';
import './index.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleSession from './components/SingleSession';
import AdminPage from './components/AdminPage';
import WaitingPage from './components/WaitingPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000');

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/waiting" element={<WaitingPage />}></Route>
      <Route path="/session" element={<SingleSession />}></Route>

      {/* <Route path="/" element={<Home socket={socket} />}></Route>
      <Route path="/admin" element={<AdminPage socket={socket} />}></Route>
      <Route path="/waiting" element={<WaitingPage socket={socket} />}></Route>
      <Route path="/session" element={<SingleSession socket={socket} />}></Route> */}

      {/* <Route path="/session/:id" element={<SingleSession socket={socket} />}></Route> */}
    </Routes>
  );
}

export default App;