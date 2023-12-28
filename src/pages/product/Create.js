import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {add} from "../../redux/service/productService";

export default function Create() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addForm = (values) => {
        console.log(values)
        dispatch(add(values)).then(() => {
            navigate('/products');
        })
    }
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <h1 style={{textAlign: "center"}}>Create a product</h1>

                    <Formik initialValues={{
                        title:'',
                        price:'',
                        description: ''
                    }}
                            onSubmit={addForm}
                    >
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
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}