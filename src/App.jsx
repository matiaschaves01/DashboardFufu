import Sidebar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        {/* <ContentWrapper /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
