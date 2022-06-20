import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const shoppingReducer = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addItem(state, action) {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex(
        (i) => i._id === action.payload._id
      );
      if (itemIndex < 0) {
        let tempProduct = { ...action.payload, quantity: 1 };
        updateItem.push(tempProduct);
      } else {
        const updatedCart = { ...updateItem[itemIndex] };
        updatedCart.quantity++;
        updateItem[itemIndex] = updatedCart;
      }
      localStorage.setItem("cart", JSON.stringify(updateItem));
      return { ...state, cartItems: updateItem };
    },
    removeItem: (state, action) => {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex(
        (i) => i._id === action.payload._id
      );
      const updateCart = { ...updateItem[itemIndex] };
      if (updateCart.quantity === 1) {
        const filterItem = updateItem.filter(
          (i) => i._id !== action.payload._id
        );
        return { ...state, cartItems: filterItem };
      } else {
        updateCart.quantity--;
        updateItem[itemIndex] = updateCart;
        localStorage.setItem("cart", JSON.stringify(updateItem));
        return { ...state, cartItems: updateItem };
      }
    },
    deleteItem: (state, action) => {
      let updateItem = [...state.cartItems];
      const filtered = updateItem.filter((i) => i._id !== action.payload._id);
      updateItem = filtered;
      localStorage.setItem("cart", JSON.stringify(updateItem));
      return { ...state, cartItems: updateItem };
    },
  },
});

export const { addItem, removeItem, deleteItem } = shoppingReducer.actions;
export default shoppingReducer.reducer;
