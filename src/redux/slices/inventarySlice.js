import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE=[
  {
    "id": "123",
    "title": "Orange t-shirt",
    "description":
      "No fancy sizing charts here, one t-shirt size to rule them all",
    "imageUrl":
      "https://www.collinsdictionary.com/images/full/tshirt_204029461_1000.jpg",
    "price": 399,
  },
  {
    "id": "456",
    "title": "Sky-blue t-shirt",
    "description":
      "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    "imageUrl":
      "https://dictionary.cambridge.org/es/images/thumb/Tshirt_noun_001_18267_2.jpg?version=5.0.185",
    "price": 499,
  },
  {
    "id": "789",
    "title": "Pink t-shirt",
    "description":
      "The only product on our site that might actually be worth buying",
    "imageUrl":
      "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540",
    "price": 799,
  },
];

export const inventarySlice = createSlice({
  name: "inventary",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      // add item to basket using `state` and `action` props
    },
  },
});

export const { add } = inventarySlice.actions;
export default inventarySlice.reducer;
