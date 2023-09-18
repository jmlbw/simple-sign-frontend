import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import FormManagePage from './pages/FormManagePage';
import SeqManagePage from './pages/SeqManagePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className="contentContainer">
          <div className="contentTitle">title</div>
          <div className="contentsArea">
            <Routes>
              <Route path="/" element={<HomePage></HomePage>} />
              <Route path="/EAM" element={<FormManagePage />} />
              <Route path="/SAM" element={<SeqManagePage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
