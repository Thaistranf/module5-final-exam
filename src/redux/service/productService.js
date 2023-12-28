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

export const update = createAsyncThunk(
    "product/edit",
    async (productEdit) => {
           return await axios.put("http://localhost:3000/products/" + productEdit.id, productEdit);
    }
)

export const removeProduct = createAsyncThunk(
    'product/remove',
    async (id) => {
        return await axios.delete(`http://localhost:3000/products/` + id);
    }
)

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id) => {
        return  await axios.get(`http://localhost:3000/products/` + id);
    }
)