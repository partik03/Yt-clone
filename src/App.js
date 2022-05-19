import './App.css';
import Header from './components/Header';
import Recommended from './components/Recommended';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import CompleteSideBar from './components/CompleteSideBar';
function App() {
  const [side, setSide] = useState(false);
  return (
   <>
   <Header side={side} setSide={setSide}/>
   <div className="app_page">
     {/* <CompleteSideBar /> */}
     <Sidebar />
     <Recommended />
   </div>
   </>
  )
}

export default App;
