import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export  default function Update (){
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const {id} =  useParams()

    useEffect(()=>{
        axios.get("http://localhost:3000/products/"+id).then(res => {
            setProduct(res.data)
        }).catch(Error => console.log(Error))
    }, [])

    const handledUpdate = (e )=> {
        // let productU = {...e}
        // console.log(productU)
        axios.put("http://localhost:3000/products/"+e.id, e).then(res => {
            alert("Update Success!!!")
            navigate('/')
        }).catch(Error => console.log(Error))
    };


    return(
        <>
            <div className='container'>
                <h1>Update Product</h1>
                <Formik onSubmit={(e) => handledUpdate(e, product.id)}
                        initialValues={product}
                        enableReinitialize={true}>
                    <Form>
                        <label htmlFor="title" className="form-label">Name</label>
                        <div className="input-group mb-3">
                            <Field type="text" className="form-control" name="title" id="title"/>
                        </div>
                        <label htmlFor="price" className="form-label">Price</label>
                        <div className="input-group mb-3">
                            <Field type="number" className="form-control" name="price" id="price"/>
                        </div>
                        <label htmlFor="description" className="form-label">Description</label>
                        <div className="input-group mb-3">
                            <Field type="text" className="form-control" name="description" id="description"/>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Save</button>
                        <Link className='btn btn-outline-primary' to={'/'}>Back Home</Link>
                    </Form>
                </Formik>
            </div>
        </>
    )

}