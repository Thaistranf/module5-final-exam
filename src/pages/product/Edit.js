import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductById, update, updateForm} from "../../redux/service/productService";
import {Field, Form, Formik} from "formik";

export default function Edit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useSelector(state => state.products.product);

    const {id} =useParams();

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    const Edit = (value) => {
        dispatch(update(value)).then(() => {
            navigate('/products')
        })

    }
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 style={{textAlign: "center"}}>Edit a product</h1>

                    <Formik initialValues={product} onSubmit={Edit} enableReinitialize={true}>
                        <Form>
                            <div className="form-group">
                                <label>Title</label>
                                <Field  className={"form-control"} name={"title"}></Field>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <Field type="number" className={"form-control"} name={"price"}></Field>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <Field type="text" className={"form-control"} name={"description"}></Field>
                            </div>

                            <button type="submit" className="btn btn-primary ml-3">Save</button>
                            <button className="btn btn-primary ml-3" onClick={()=> navigate("/products")}>Back</button>
                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    )
}