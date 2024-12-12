import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Discover from './pages/Discover';
import PlayTrack from './components/PlayTrack';





function App() {
  return (
    <div className='overflow-hidden bg-gray-950 text-white w-screen max-h-screen flex'>
      <SideBar />
      <div className="flex relative bg-gray-900 rounded-s-3xl flex-col w-full">
        <NavBar />
        <Routes>
          <Route path='/' element={<Discover />} />

        </Routes>
        <PlayTrack />
      </div>
    </div>
    
  );
}

export default App;
