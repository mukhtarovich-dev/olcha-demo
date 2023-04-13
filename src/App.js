import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuLayOut from "./pages/MenuLayOut";
import Omenu from "./pages/Omenu";
import Kategoryget from "./pages/Product/kategoryget";
import Notfaundpage from "./Companents/Notfaundpage";
import Getoneproduct from "./pages/Product/getoneproduct";
import Butoon1 from "./pages/buttons/butoon1";
import Button2 from "./pages/buttons/button2";
import Button3 from "./pages/buttons/button3";
import Button4 from "./pages/buttons/button4";
import Button5 from "./pages/buttons/button5";
import CardKategory from "./pages/Product/CardKategory";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<MenuLayOut/>} >
        <Route index  element={<Omenu/>}/>
        <Route path={"/kategory/:id"}  element={<Kategoryget/>}/>
        <Route path={"/product/:id"}  element={<Getoneproduct/>}/>
        <Route path={"/button/sotish"}  element={<Butoon1/>}/>
        <Route path={"/button/0prosent"}  element={<Button2/>}/>
        <Route path={"/button/chegirmalar"}  element={<Button3/>}/>
        <Route path={"/button/yutuqli/oyin"}  element={<Button4/>}/>
        <Route path={"/button/xarita"}  element={<Button5/>}/>
        <Route path={"/button/kategory"}  element={<CardKategory/>}/>
        </Route>
        <Route path={"*"}  element={<Notfaundpage/>}/>

    </Routes>
    </BrowserRouter>
  );
}
export default App;