import logo from "./logo.svg";
import "./App.css";
import DemoStateAndProps from "./Components/DemoStateAndProps/DemoStateAndProps";
import DemoUseEffect from "./Components/DemoUseEffect/DemoUseEffect";

// import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import BaiTapHienThiGiay from "./Components/BaiTapHienThiGiay/BaiTapHienThiGiay";
import DetaiGiay from "./Components/BaiTapHienThiGiay/DetaiGiay";
import Register from "./Components/Register/Register";

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
          {/* có thuộc tính index trong route giúp hiển thị component đó lên đầu tiên khi người dùng vừa vào trang đúng tới đường dẫn của route cha  */}
          <Route index element={<BaiTapHienThiGiay />}></Route>
          <Route path="chi-tiet-giay">
            <Route path=":id" element={<DetaiGiay />} />
          </Route>
          <Route path="/demo-formik" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
