import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextProvider from './contexts/ContextProvider';
import HomePage from './pages/HomePage';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import FormManagePage from './pages/FormManagePage';

import ApprovalBoxViewPage from './pages/ApprovalBoxViewPage';
import Titlebox from './components/common/TitleBox';
import ApprovalRightHeader from './components/approvalBox/ApprovalRightHeader';
import SeqManagePage from './pages/SeqManagePage';

import FormListPage from './pages/FormListPage';




function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Sidebar />
          <div className="contentContainer">
            <Titlebox
              title="상신문서"
              view="approval"
              componentProp={<ApprovalRightHeader />}
            ></Titlebox>
            <div className="contentsArea">
              <Routes>
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="/EAM" element={<FormManagePage />} />
                <Route path="/ABV" element={<ApprovalBoxViewPage />} />
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
