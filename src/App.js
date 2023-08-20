import logo from './logo.svg';
import './App.css';
import DemoStateAndProps from './Components/DemoStateAndProps/DemoStateAndProps';
import DemoUseEffect from './Components/DemoUseEffect/DemoUseEffect';

// import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import ItemDetail from './Components/ItemDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route này dùng để hiển thị giao diện của user  */}
        {/* path là đường dẫn tới component mà chúng ta muốn hiển thị  */}
        {/* element là thuộc tính sẽ chứa component chúng ta muốn hiển thị  */}
        <Route path="/" element={<UserTemplate />}>
          <Route path="demo" element={<DemoUseEffect />} />
          <Route path="detail">
            <Route path=":id" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
