import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => { //Reducer function
            // Directly modifing the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});
// Reat-Redux gives us this syntax
export const{addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;