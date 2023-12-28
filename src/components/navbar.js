import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div style={{display:"flex"}}>
                <button className="btn btn-outline-success my-2 my-sm-0" ><Link to={"/products/add"}>Create</Link></button>
                {/*<div className="btn btn-outline-success my-2 my-sm-0 ml-3" ><Link to={"/home"}>Home</Link></div>*/}
            </div>
        </>
    )
}