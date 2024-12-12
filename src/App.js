import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Discover from './pages/Discover';
import PlayTrack from './components/PlayTrack';





function App() {
  return (
    <div className='md:overflow-hidden  bg-gray-950 text-white w-screen h-screen  flex'>
      <SideBar />
      <div className="flex relative bg-gray-950 md:bg-gray-900 md:rounded-s-3xl rounded-none flex-col w-full ">
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
