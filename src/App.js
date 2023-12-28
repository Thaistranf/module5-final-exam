import {Route, Routes} from "react-router-dom";
import ListProduct from "./pages/product/ListProduct";
import Create from "./pages/product/Create";
import Home from "./pages/home";
import Edit from "./pages/product/Edit";

function App() {
  return (
    <>
      <Routes>
          <Route path="products" element={<Home />}>
              {/*<Route path="list" element={<ListProduct />} />*/}
              <Route path="add" element={<Create />} />
              <Route path="edit/:id" element={<Edit />} />
              {/*<Route path="view/:id" element={<View />} />*/}
          </Route>
          {/*<Route path="/create" element={<Create />} />*/}
          {/*<Route path="/home" element={<Home />} />*/}
      </Routes>
    </>
  );
}

export default App;
