import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import FormManagePage from './pages/FormManagePage';
import ApprovalBoxViewPage from './pages/ApprovalBoxViewPage';
import Titlebox from './components/common/TitleBox';
import SearchDate from './components/approvalBox/SearchDate';
import ApprovalRightHeader from './components/approvalBox/ApprovalRightHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className="contentContainer">
          {/* <div className="contentTitle"><Ttitle></div> */}
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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
