import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Paths} from "./utils/shop-types.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
import {navItems, productItems} from "./configurations/nav-config.ts";
//import NavLayout from "./components/navigation/NavLayout.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import NavigatorDesktop from "./components/navigation/NavigatorDesktop.tsx";


function App() {

  return (
      <Routes>
        {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
        <Route path={Paths.HOME} element={<NavigatorDesktop items={navItems}/>}>
          <Route index element={<Home/>}/>
          <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
          <Route path={Paths.ORDERS} element={<Orders/>}/>
          {/*<Route path={Paths.PRODUCTS} element={<Products/>}/>*/}
          <Route path={Paths.PRODUCTS} element={<NavigatorDesktop items={productItems}/>}>
            <Route path={Paths.BREAD} element={<Bread/>}/>
            <Route path={Paths.DAIRY} element={<Dairy/>}/>
            <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
          </Route>
          <Route path={Paths.CART} element={<ShoppingCart/>}/>
          <Route path={'*'} element={<ErrorPage/>}/>
        </Route>
    </Routes>
  )
}

export default App
