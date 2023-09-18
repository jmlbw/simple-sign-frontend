import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextProvider from './contexts/ContextProvider';
import HomePage from './pages/HomePage';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import FormManagePage from './pages/FormManagePage';
import FormListPage from './pages/FormListPage';

import SeqManagePage from './pages/SeqManagePage';

function App() {
  return (
    <ContextProvider>
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
                <Route path="/FL" element={<FormListPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
