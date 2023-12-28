import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";
import ListProduct from "./product/ListProduct";

export default function Home() {
    return  (
        <>
            <Navbar /><hr/>
            <ListProduct/><hr/>
            <Outlet />
        </>

    )
}