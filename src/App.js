import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import FormManagePage from './pages/FormManagePage';
import FormListPage from './pages/FormListPage';

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
              <Route path="/FL" element={<FormListPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
