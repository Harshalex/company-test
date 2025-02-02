import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddProduct from "./components/AddProduct";
import RequireUser from "./components/RequireUser";
import AlreadyLogged from "./components/AlreadyLogged";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<AlreadyLogged />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
