import {createSlice} from "@reduxjs/toolkit";
import {add, getAll, getProductById, removeProduct, update, updateForm} from "../service/productService";

const initialState = {
    list: [],
    product: {
        title: '',
        price:'',
        description: ''
    },
}

export const productSlice =createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        builder.addCase(add.fulfilled, (state, action) => {
            state.list.push(action.payload);
        })
        builder.addCase(update.fulfilled, (state, action) => {
            state.list[state.list.indexOf(action.payload)] = action.payload;
        })
        builder.addCase(getProductById.fulfilled,(state, {payload}) => {
            state.product =  payload.data;
        })
        builder.addCase(removeProduct.fulfilled, (state, {payload}) => {
            state.list.splice(state.list.indexOf(payload));
        })
    },
})

export default productSlice.reducer;