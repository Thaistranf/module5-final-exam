import {createSlice} from "@reduxjs/toolkit";
import {add, getAll, getProductById, update, updateForm} from "../service/productService";

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
        // builder.addCase(updateForm.fulfilled, (state, action) => {
        //     state.productEdit = action.payload;
        // })
        builder.addCase(update.fulfilled, (state, action) => {
            // for (let i = 0; i < state.list.length; i++) {
            //     if (state.list[i].id === action.payload){
            //         state.list[i] = action.payload;
            //     }
            // }
            state.list[state.list.indexOf(action.payload)] = action.payload;
        })
        builder.addCase(getProductById.fulfilled,(state, {payload}) => {
            state.product =  payload.data;
        })
    },
})

export default productSlice.reducer;