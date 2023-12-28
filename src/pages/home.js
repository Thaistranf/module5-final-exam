import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";
import ListProduct from "./product/ListProduct";

export default function Home() {
    return  (
        <>
            <Navbar /><hr/>
            <ListProduct/>
            <Outlet />  {/*Outlet se dai dien cho 1 vung hien thi chung ma khi goi component se thay the vao*/}
        </>

    )
}