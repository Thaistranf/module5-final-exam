import {Navigate, Route, Routes} from "react-router-dom";
import ListProduct from "./pages/product/ListProduct";
import Create from "./pages/product/Create";
import Home from "./pages/home";
import Edit from "./pages/product/Edit";
import View from "./pages/product/View";

function App() {
  return (
    <>
      <Routes>
          <Route path="products" element={<Home />}>
              <Route path="add" element={<Create />} />
              <Route path="edit/:id" element={<Edit />} />
              <Route path="view/:id" element={<View />} />
          </Route>
          <Route path={'*'} element={<Navigate to="/products" />}/>
      </Routes>
    </>
  );
}

export default App;
