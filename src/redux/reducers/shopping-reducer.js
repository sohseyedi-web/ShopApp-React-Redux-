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
    addItem: (state, action) => {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex(
        (i) => i._id === action.payload.id
      );
      if (itemIndex <= 0) {
        updateItem.push({ ...action.payload, quantity: 1 });
      } else {
        const updateCart = { ...updateItem[itemIndex] };
        updateCart.quantity++;
        updateCart[itemIndex] = updateItem;
      }
      localStorage.setItem("cart", JSON.stringify(updateItem));
      return { ...state, cartItems: updateItem };
    },
    removeItem: (state, action) => {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex(
        (i) => i._id === action.payload.id
      );

      if (updateItem.quantity === 1) {
        const filterItem = updateItem.filter(
          (i) => i._id !== action.payload.id
        );
        return filterItem;
      } else {
        const updateCart = { ...updateItem[itemIndex] };
        updateCart.quantity--;
        updateCart[itemIndex] = updateItem;
      }
      localStorage.setItem("cart", JSON.stringify(updateItem));
      return { ...state, cartItems: updateItem };
    },
    deleteItem: (state, action) => {
      const updateItem = [...state.cartItems];
      const filterItem = updateItem.filter((i) => i._id !== action.payload.id);
      updateItem = filterItem;
      localStorage.setItem("cart", JSON.stringify(updateItem));
      return { ...state, cartItems: updateItem };
    },
  },
});

export const { addItem, removeItem, deleteItem } = shoppingReducer.actions;
export default shoppingReducer.reducer;
