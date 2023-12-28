import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    "products/getAll",
    async () => {
        let res = await axios.get("http://localhost:3000/products");
        return res.data;
    }
)

export const add = createAsyncThunk(
    "products/add",
    async (newProduct) => {
        let newProductRes = await axios.post("http://localhost:3000/products", newProduct);
        return newProductRes.data;
    }
)

// export const updateForm = createAsyncThunk(
//     "product/editForm",
//     async (id) => {
//         let res = await axios.get("http://localhost:3000/products" + id);
//         return res.data;
//     }
// )

export const update = createAsyncThunk(
    "product/edit",
    async (productEdit) => {
        // let res =
           return await axios.put("http://localhost:3000/products" + productEdit.id, productEdit);
        // return res.data;
    }
)

export const Delete = createAsyncThunk(
    "product/delete",
    async (id) => {
        await axios.delete("http://localhost:3000/products" + id);
        return id;
    }
)

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id) => {
        return  await axios.get(`http://localhost:3000/products/` + id);
    }
)