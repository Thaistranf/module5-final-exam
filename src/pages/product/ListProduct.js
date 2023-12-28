import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAll, removeProduct} from "../../redux/service/productService";
import {Link} from "react-router-dom";

export default function ListProduct() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    });
    useEffect(() => {
        dispatch(getAll());
    }, []);

    const deleteProduct = (productId) => {
        const check = window.confirm('Are you sure you want to delete');
        if (check)
        {dispatch(removeProduct(productId));
        }
    }

    return (
        <>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Describe</th>
                    <th scope="col">Price</th>
                    <th scope="col" rowSpan={2}>Action</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {products.map((item, index) =>{
                    return(
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td><Link to={"/products/view/" + item.id}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td className="btn btn-primary">< Link to={"/products/edit/" + item.id} style={{textDecoration:"none", color: "white"}} >Edit</Link> </td>
                            <td onClick={() => deleteProduct(item.id)} className="btn btn-danger ml-3" >Delete</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}